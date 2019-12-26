<template>
  <section class="levels-section">
    <Slider>
      <SliderFrame>
        <p>Slider frame 1</p>
      </SliderFrame>
      <SliderFrame>
        <p>Slider frame 2</p>
      </SliderFrame>
      <SliderFrame>
        <p>Slider frame 3</p>
      </SliderFrame>
    </Slider>
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

}
</style>