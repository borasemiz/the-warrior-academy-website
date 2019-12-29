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
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelRegular } from '../svg-components/level-illustrations';

@Component({
  components: {
    LevelSlideBase,
    LevelRegular
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.level-regular {
  display: inline-block;
  width: 160px;
}
</style>
