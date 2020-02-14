<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelNovice class="level-novice" />
    </template>
    <template v-slot:deffinition>
      <h2>Novice Frontend Developer</h2>
      <p>
        In this level, you will learn basic HTML. No CSS. You will be shown
        how you can fill the website content as a skeleton. We will deal with
        "what to show" part, instead of "how it looks". Upon finishing this section,
        you will know the difference among each HTML tag.
      </p>
      <CodePreview>
        <CodePreviewTab language="html" titleText="shopping.html" :sourceCode="codeSample" />
      </CodePreview>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import CodePreview from '../CodePreview.vue';
import CodePreviewTab from '../CodePreviewTab.vue';
import { LevelNovice } from '../svg-components/level-illustrations';

import sampleHtml from '@/constants/novice-code-sample';
import { escapeHtml } from '@/utils/escape-html';

@Component({
  components: {
    LevelSlideBase,
    LevelNovice,
    CodePreview,
    CodePreviewTab
  }
})
export default class extends Vue {
  public codeSample: string = escapeHtml(sampleHtml);
}
</script>

<style lang="scss" scoped>
.level-novice {
  display: inline-block;
  width: 300px;
}
</style>
