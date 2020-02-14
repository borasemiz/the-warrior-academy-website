<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelExpert class="level-expert" />
    </template>
    <template v-slot:deffinition>
      <h2>Expert Frontend Developer</h2>
      <p>
        You will learn more JavaScript. We are going to continue our path by learning <strong>functions</strong>, <strong>classes</strong>, <strong>scopes</strong>, <strong>concept of callbacks</strong> and <strong>closures</strong>.
        We will explore techniques that will allow us to make a website responsive (i.e. it will look good on mobile, tablet, desktop or any other screen).
      </p>
      <CodePreview>
        <CodePreviewTab titleText="expert.js" language="js" :sourceCode="source" />
        <CodePreviewTab titleText="responsive.css" language="css" :sourceCode="cssSource" />
      </CodePreview>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelExpert } from '../svg-components/level-illustrations';
import CodePreview from '../CodePreview.vue';
import CodePreviewTab from '../CodePreviewTab.vue';

import { js, css } from '@/constants/expert-code-sample';

@Component({
  components: {
    LevelSlideBase,
    LevelExpert,
    CodePreview,
    CodePreviewTab
  }
})
export default class extends Vue {
  public source: string = js;
  public cssSource: string = css;
}
</script>

<style lang="scss" scoped>
.level-expert {
  display: inline-block;
  width: 300px;
}
</style>
