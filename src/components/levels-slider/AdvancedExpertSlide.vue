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
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelAdvancedExpert } from '../svg-components/level-illustrations';

@Component({
  components: {
    LevelSlideBase,
    LevelAdvancedExpert
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.level-advanced-expert {
  display: inline-block;
  width: 300px;
}
</style>
