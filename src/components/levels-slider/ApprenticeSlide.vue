<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelApprentice class="level-apprentice" />
    </template>
    <template v-slot:deffinition>
      <h2>Apprentice Frontend Developer</h2>
      <p>
        We will learn basic CSS. We will focus on the looks of the websites. You will be able to
        change the colors of texts, backgrounds of everything, add fancy borders... Everything regarding looks.
      </p>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelApprentice } from '../svg-components/level-illustrations';

@Component({
  components: {
    LevelSlideBase,
    LevelApprentice
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.level-apprentice {
  display: inline-block;
  width: 250px;
}
</style>
