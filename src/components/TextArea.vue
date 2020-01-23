<template>
  <div class="input-wrapper">
    <div class="input-border input-border-focus" :class="{ focus: inputFocused }">
      <textarea
        class="input-textarea"
        rows="5"
        :id="identifier"
        :name="identifier"
        @input="updateValue($event.target.value)"
        @focus="inputFocused = true"
        @blur="inputFocused = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public inputFocused: boolean = false;

  @Prop({
    required: false
  })
  public identifier: string;

  @Prop({
    default: ''
  })
  public value: string;

  @Emit('input')
  public updateValue(value: string): string {
    return value;
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;
}

.input-element {
  display: block;
  width: 100%;
}
</style>
