<template>
  <button class="slider-bullet">
    <div
      class="slider-bullet-inner"
      :class="{ active: isActive }"
    />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop({
    default: false
  })
  public isActive: boolean;
}
</script>

<style lang="scss" scoped>
.slider-bullet {
  cursor: pointer;
  background: transparent;
  border: 3px solid var(--c-slider-bullet-border);
  border-radius: 3px;
  padding: 3px;
}

.slider-bullet-inner {
  background-color: var(--c-slider-bullet-inner);
  width: 1rem;
  height: 1rem;
  opacity: 0.0;
  transition: opacity 400ms;
  border-radius: 1px;

  &.active {
    opacity: 1.0;
  }
}
</style>
