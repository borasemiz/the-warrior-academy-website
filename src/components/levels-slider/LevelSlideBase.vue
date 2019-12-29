<template>
  <div class="slide-container">
    <div class="illustration">
      <slot name="illustration" />
    </div>
    <div class="deffinition">
      <slot name="deffinition" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>

@include respond-to('xlarge') {
  .slide-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    height: 500px;
  }

  .illustration {
    text-align: center;
    height: 100%
  }
}
</style>
