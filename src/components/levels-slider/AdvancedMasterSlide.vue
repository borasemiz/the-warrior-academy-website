<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelAdvancedMaster class="level-advanced-master" />
    </template>
    <template v-slot:deffinition>
      <h2>Advanced Master Frontend Developer</h2>
      <p>
        Until this point you have learned all the core and most required skills of a frontend developer.
        In this section we will add more tools to our disposal to make our life easier. I will introduce
        CSS preprocessors such as SASS and other languages that compiles into JavaScript.
      </p>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelAdvancedMaster } from '../svg-components/level-illustrations';

@Component({
  components: {
    LevelSlideBase,
    LevelAdvancedMaster
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.level-advanced-master {
  display: inline-block;
  width: 300px;
}
</style>
