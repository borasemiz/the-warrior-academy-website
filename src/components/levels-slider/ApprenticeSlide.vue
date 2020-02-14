<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelApprentice class="level-apprentice" />
    </template>
    <template v-slot:deffinition>
      <h2>Apprentice Frontend Developer</h2>
      <p>
        We will continue learning HTML and we are going touch on CSS, so that our content looks beautiful.
        We will be mostly focusing on the looks of the websites. You will be able to
        change the colors of texts, backgrounds of everything, add fancy borders... Everything regarding appearance.
      </p>
      <CodePreview>
        <CodePreviewTab titleText="shopping.css" :sourceCode="cssSample" language="css"/>
        <CodePreviewTab titleText="shopping.html" :sourceCode="htmlSample" language="html"  />
      </CodePreview>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelApprentice } from '../svg-components/level-illustrations';
import CodePreview from '../CodePreview.vue';
import CodePreviewTab from '../CodePreviewTab.vue';

import { escapeHtml } from '@/utils/escape-html';
import { css, html } from '@/constants/apprentice-code-sample';

@Component({
  components: {
    LevelSlideBase,
    LevelApprentice,
    CodePreview,
    CodePreviewTab
  }
})
export default class extends Vue {
  public cssSample: string = escapeHtml(css);
  public htmlSample: string = escapeHtml(html);
}
</script>

<style lang="scss" scoped>
.level-apprentice {
  display: inline-block;
  width: 250px;
}
</style>
