<template>
  <div class="input-wrapper">
    <div class="input-border" :class="{ focus: inputFocused }">
      <input
        class="input-element input-text"
        :type="type"
        :name="identifier"
        :id="identifier"
        @focus="inputFocused = true"
        @blur="inputFocused = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public inputFocused: boolean = false;

  @Prop({
    default: 'text'
  })
  public type: string;

  @Prop({
    required: false
  })
  public identifier: string;
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;
}

.input-border {
  @include inputBordered();
  position: relative;
  transition: border-color 300ms;

  &.focus {
    border-left-color: var(--c-input-focused-state-border);
    border-right-color: var(--c-input-focused-state-border);

    &:after,
    &:before {
      transform: translateX(0);
    }
  }
  
  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    background: linear-gradient(to right, var(--c-input-focused-state-border) 70%, var(--c-input-border));
    width: 140%;
    height: #{$inputBorderThickness};
    background-repeat: no-repeat;
    transform: translateX(-100%);
    left: 0;
    transition: transform 300ms;
  }

  &:before {
    top: -#{$inputBorderThickness};
  }

  &:after {
    bottom: -#{$inputBorderThickness};
  }
}

.input-element {
  display: block;
  width: 100%;
}
</style>
