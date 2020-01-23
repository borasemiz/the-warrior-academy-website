<template>
  <div class="form-field">
    <label class="label" :for="identifier">{{ label }}</label>
    <Input class="input-field" :type="inputType" :identifier="identifier" />
    <!--<input class="input-field input-text" :type="inputType" :id="identifier" :name="identifier"> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import Input from './Input.vue';

@Component({
  components: {
    Input
  }
})
export default class extends Vue {
  @Prop({ required: true })
  public label: string;

  @Prop({ required: false })
  public identifier: string;

  @Prop({ default: 'text' })
  public inputType: string;
}
</script>

<style lang="scss" scoped>
.form-field {
  width: 100%;
}

.input-field {
  display: block;
  width: 100%;
}
</style>
