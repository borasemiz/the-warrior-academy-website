<template>
  <Slider>
    <SliderFrame>
      <NoviceSlide />
    </SliderFrame>
    <SliderFrame>
      <ApprenticeSlide />
    </SliderFrame>
    <SliderFrame>
      <RegularSlide />
    </SliderFrame>
    <SliderFrame>
      <ExpertSlide />
    </SliderFrame>
  </Slider>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Slider, SliderFrame } from '../slider';
import NoviceSlide from './NoviceSlide.vue';
import ApprenticeSlide from './ApprenticeSlide.vue';
import RegularSlide from './RegularSlide.vue';
import ExpertSlide from './ExpertSlide.vue';

@Component({
  components: {
    Slider,
    SliderFrame,
    NoviceSlide,
    ApprenticeSlide,
    RegularSlide,
    ExpertSlide
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>

</style>
