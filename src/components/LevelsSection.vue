<template>
  <section class="levels-section">
    <LevelsSlider />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Slider, SliderFrame }  from './slider';
import { LevelsSlider } from './levels-slider';

@Component({
  components: {
    LevelsSlider
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.levels-section {
  padding: 20px 0;
}
</style>