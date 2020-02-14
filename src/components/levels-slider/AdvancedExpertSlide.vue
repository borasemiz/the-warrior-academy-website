<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelAdvancedExpert class="level-advanced-expert" />
    </template>
    <template v-slot:deffinition>
      <h2>Advanced Expert Frontend Developer</h2>
      <p>
        We will start putting what we learned so far together. You will be learning the basics
        of DOM manipulation and web APIs. You will start implement interactivity to your websites.
        We will learn animations with CSS. After finishing this section, you will have high success rate of landing a job.
      </p>
      <CodePreview>
        <CodePreviewTab titleText="alert.html" language="html" :sourceCode="htmlSource" />
        <CodePreviewTab titleText="animation.css" language="css" :sourceCode="cssSource" />
        <CodePreviewTab titleText="control.js" language="js" :sourceCode="jsSource" />
      </CodePreview>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelAdvancedExpert } from '../svg-components/level-illustrations';
import CodePreview from '../CodePreview.vue';
import CodePreviewTab from '../CodePreviewTab.vue';
import { html, css, js } from '@/constants/advanced-expert-sample';
import { escapeHtml } from '@/utils/escape-html';

@Component({
  components: {
    LevelSlideBase,
    LevelAdvancedExpert,
    CodePreview,
    CodePreviewTab
  }
})
export default class extends Vue {
  public jsSource: string = js;
  public cssSource: string = css;
  public htmlSource: string = escapeHtml(html);
}
</script>

<style lang="scss" scoped>
.level-advanced-expert {
  display: inline-block;
  width: 300px;
}
</style>
