<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelGrandMaster class="level-grand-master" />
    </template>
    <template v-slot:deffinition>
      <h2>Grand Master Frontend Developer</h2>
      <p>
        We will conclude our education by introducing module bundlers, JavaScript module system and Webpack or ParcelJS.
        We will see different ways of package your application and serve it to you users.
      </p>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelGrandMaster } from '../svg-components/level-illustrations';

@Component({
  components: {
    LevelSlideBase,
    LevelGrandMaster
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.level-grand-master {
  display: inline-block;
  width: 230px;
}
</style>
