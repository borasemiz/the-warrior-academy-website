<template>
  <div id="app" class="theme-dark">
    <Header />
    <div class="wrapper">
      <IntroductionSection />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Header, IntroductionSection } from './components';

@Component({
  components: {
    Header,
    IntroductionSection
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
