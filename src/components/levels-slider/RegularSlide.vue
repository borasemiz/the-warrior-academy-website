<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelRegular class="level-regular" />
    </template>
    <template v-slot:deffinition>
      <h2>Regular Frontend Developer</h2>
      <p>
        We will get start learning JavaScript. You will familiarize yourself with
        terms such as variables, statements, strings, numbers, loops, ifs, elses. We will
        continue learning CSS by introducing layouts. You will learn how to align items,
        how to set elements' positions and structuring website's look.
      </p>
      <CodePreview>
        <CodePreviewTab titleText="layout.css" language="css" :sourceCode="cssSource" />
        <CodePreviewTab titleText="fibonacci.js" language="js" :sourceCode="jsSource" />
      </CodePreview>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelRegular } from '../svg-components/level-illustrations';
import CodePreview from '../CodePreview.vue';
import CodePreviewTab from '../CodePreviewTab.vue';

import { css, js } from '@/constants/regular-code-sample';

@Component({
  components: {
    LevelSlideBase,
    LevelRegular,
    CodePreview,
    CodePreviewTab
  }
})
export default class extends Vue {
  public cssSource: string = css;
  public jsSource: string = js;
}
</script>

<style lang="scss" scoped>
.level-regular {
  display: inline-block;
  width: 160px;
}
</style>
