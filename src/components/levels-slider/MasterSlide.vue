<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelMaster class="level-master" />
    </template>
    <template v-slot:deffinition>
      <h2>Master Frontend Developer</h2>
      <p>
        We will learn a web framework of your choice. <strong>Angular</strong> or <strong>Vue</strong>. In addition to that, we will see techniques of how to properly
        structure a frontend project. We will dig a little deeper and learn some <strong>asynchronous JavaScript</strong> and <strong>HTTP</strong>.
      </p>
      <CodePreview>
        <CodePreviewTab titleText="component.vue" language="html" :sourceCode="source" />
      </CodePreview>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelMaster } from '../svg-components/level-illustrations';
import CodePreview from '../CodePreview.vue';
import CodePreviewTab from '../CodePreviewTab.vue';
import { escapeHtml } from '@/utils/escape-html';
import { vue } from '@/constants/master-sample';

@Component({
  components: {
    LevelSlideBase,
    LevelMaster,
    CodePreview,
    CodePreviewTab
  }
})
export default class extends Vue {
  public source: string = escapeHtml(vue);
}
</script>

<style lang="scss" scoped>
.level-master {
  display: inline-block;
  width: 400px;
}
</style>
