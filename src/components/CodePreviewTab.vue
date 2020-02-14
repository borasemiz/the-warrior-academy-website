<template>
  <div />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

declare var hljs: any;

@Component({
  name: 'code-preview-tab'
})
export default class extends Vue {
  @Prop({
    default: ''
  })
  public titleText: string;

  @Prop({
    required: true
  })
  public sourceCode: string;

  @Prop({
    default: 'javascript'
  })
  public language: string;
}
</script>

<style lang="scss" scoped>

</style>
