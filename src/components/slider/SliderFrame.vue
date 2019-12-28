<template>
  <div :class="sliderFrameClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public deactive(): void {
    this.sliderFrameClass.inactive = true;
  }

  public activate(): void {
    this.sliderFrameClass.inactive = false;
  }

  public sliderFrameClass = {
    'slider-frame': true,
    'inactive': true
  }
}
</script>

<style lang="scss" scoped>
.slider-frame {
  visibility: visible;
  overflow: hidden;
  width: auto;
  height: auto;
  opacity: 1.0;
  transition: visibility 0ms, opacity 400ms;
}
.inactive {
  visibility: hidden;
  width: 0;
  height: 0;
  opacity: 0.0;
  transition: opacity 400ms, visibility 0ms 400ms, height 0ms 400ms, width 0ms 400ms;
}
</style>
