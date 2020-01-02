<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelMaster class="level-master" />
    </template>
    <template v-slot:deffinition>
      <h2>Master Frontend Developer</h2>
      <p>
        We will learn a web framework of your choice. React, Angular or Vue. In addition to that, we will see techniques of how to properly
        structure a frontend project. We will dig a little deeper and learn some asynchronous JavaScript and HTTP.
      </p>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelMaster } from '../svg-components/level-illustrations';

@Component({
  components: {
    LevelSlideBase,
    LevelMaster
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.level-master {
  display: inline-block;
  width: 400px;
}
</style>
