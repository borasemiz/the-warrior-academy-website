<template>
  <section class="levels-section">
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Slider, SliderFrame }  from './slider';

@Component({
  components: {
    Slider,
    SliderFrame
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.levels-section {
  padding: 20px 0;
}
</style>