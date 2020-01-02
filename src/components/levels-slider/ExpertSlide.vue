<template>
  <LevelSlideBase>
    <template v-slot:illustration>
      <LevelExpert class="level-expert" />
    </template>
    <template v-slot:deffinition>
      <h2>Expert Frontend Developer</h2>
      <p>
        You will learn more JavaScript. We will explore techniques that will allow
        us to make a website responsive (i.e. it will look good on mobile, tablet, desktop or any other screen).
      </p>
    </template>
  </LevelSlideBase>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LevelSlideBase from './LevelSlideBase.vue';
import { LevelExpert } from '../svg-components/level-illustrations';

@Component({
  components: {
    LevelSlideBase,
    LevelExpert
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.level-expert {
  display: inline-block;
  width: 300px;
}
</style>
