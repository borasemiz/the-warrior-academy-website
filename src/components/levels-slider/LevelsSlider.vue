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
    <SliderFrame>
      <AdvancedExpertSlide />
    </SliderFrame>
    <SliderFrame>
      <MasterSlide />
    </SliderFrame>
    <SliderFrame>
      <AdvancedMasterSlide />
    </SliderFrame>
    <SliderFrame>
      <GrandMasterSlide />
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
import AdvancedExpertSlide from './AdvancedExpertSlide.vue';
import MasterSlide from './MasterSlide.vue';
import AdvancedMasterSlide from './AdvancedMasterSlide.vue';
import GrandMasterSlide from './GrandMasterSlide.vue';

@Component({
  components: {
    Slider,
    SliderFrame,
    NoviceSlide,
    ApprenticeSlide,
    RegularSlide,
    ExpertSlide,
    AdvancedExpertSlide,
    MasterSlide,
    AdvancedMasterSlide,
    GrandMasterSlide
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>

</style>
