<template>
  <div id="app" class="theme-dark">
    <Header />
    <div class="wrapper">
      <IntroductionSection />
      <LevelsSection />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Header, IntroductionSection, LevelsSection } from './components';

@Component({
  components: {
    Header,
    IntroductionSection,
    LevelsSection
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
