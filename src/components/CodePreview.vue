<template>
  <section class="code-preview">
    <header>{{ titleText }}</header>
    <div class="preview">
      <pre><code :class="language" ref="sourceCode" v-html="sourceCode"></code></pre>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

declare var hljs: any;

hljs.configure({
  useBR: false,
  tabReplace: 2
});

@Component
export default class extends Vue {
  @Prop({
    default: ''
  })
  public titleText: string;

  @Prop({
    required: true
  })
  public sourceCode: string;

  @Prop({
    default: 'javascript'
  })
  public language: string;

  public mounted(): void {
    hljs.highlightBlock(this.$refs['sourceCode']);
  }
}
</script>

<style lang="scss" scoped>
.code-preview {
  header {
    padding: 0.5rem;
    text-align: left;
    font-family: 'Ubuntu', sans-serif;
    color: var(--c-code-preview-header);
    background: var(--c-code-preview-frame);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .preview {
    padding: 0.8rem;
    border: 2.5px solid var(--c-code-preview-frame);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #191919;

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
