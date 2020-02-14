<template>
  <section class="code-preview">
    <header>
      <div class="tab-switches">
        <button
          v-for="(titleText, index) of tabTitles"
          class="preview-tab-title"
          :class="{ active: index === selectedIndex }"
          :key="index"
          @click="selectedIndex = index"
        >
          {{ titleText }}
        </button>
      </div>
    </header>
    
    <div ref="previewContents">
      <div
        v-for="(sourceCode, index) of tabContents"
        class="preview"
        :class="{ active: index === selectedIndex }"
        :key="index"
        ref="tabContent"
      >
        <pre><code :class="tabLanguages[index]" v-html="sourceCode"></code></pre>
      </div>
    </div>

    <div style="display: none;">
      <slot />
    </div>

  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CodePreviewTab from './CodePreviewTab.vue';

declare var hljs: any;

hljs.configure({
  useBR: false,
  tabReplace: 2
});

@Component
export default class extends Vue {
  public selectedIndex: number = 0;

  public tabTitles: string[] = [];
  public tabContents: string[] = [];
  public tabLanguages: string[] = [];

  public mounted(): void {
    this.tabTitles = this.getTabTitles();
    this.tabContents = this.getTabContents();
    this.tabLanguages = this.getTabLanguages();
    
    window.setTimeout(() => {
      Array.from((this.$refs.previewContents as HTMLElement).children).forEach(element => {
        const code = element.querySelector('code');
        hljs.highlightBlock(code);
      });
    });
  }

  private getTabTitles(): string[] {
    return this.$slots.default
      ? this.$slots.default
        .map(node => node.componentInstance)
        .filter(tab => typeof tab !== 'undefined')
        .map(tab => (tab as CodePreviewTab).titleText)
      : [];
  }

  private getTabContents(): string[] {
    return this.$slots.default
      ? this.$slots.default
        .map(node => node.componentInstance)
        .filter(tab => typeof tab !== 'undefined')
        .map(tab => (tab as CodePreviewTab).sourceCode)
      : [];
  }

  private getTabLanguages(): string[] {
    return this.$slots.default
      ? this.$slots.default
        .map(node => node.componentInstance)
        .filter(tab => typeof tab !== 'undefined')
        .map(tab => (tab as CodePreviewTab).language)
      : [];
  }
}
</script>

<style lang="scss" scoped>
.code-preview {
  header {
    padding: 0.5rem;
    padding-bottom: 0;
    padding-left: 2px;
    text-align: left;
    font-family: 'Ubuntu', sans-serif;
    color: var(--c-code-preview-header);
    background: var(--c-code-preview-frame);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .preview-tab-title {
    background: transparent;
    border: none;
    vertical-align: bottom;
    padding: 5px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: background-color 200ms;

    &.active {
      background-color: var(--c-code-preview-background);
      color: var(--c-text);
      cursor: default;

      &:focus, &:active {
        outline: none;
      }
    }
  }

  .preview {
    padding: 0.8rem;
    border: 2.5px solid var(--c-code-preview-frame);
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #191919;
    display: none;

    &.active {
      display: block;
    }

    pre {
      margin: 0;
      overflow-x: auto;
      code {
        width: 100%;
        background: transparent !important;
        overflow-x: unset !important;
        font-family: 'Ubuntu Mono', monospace;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
