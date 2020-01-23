<template>
  <div id="app" class="theme-dark">
    <Header />
    <div class="wrapper">
      <IntroductionSection />
      <LevelsSection />
      <ContactSection />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import {
  Header,
  IntroductionSection,
  LevelsSection,
  ContactSection,
  Overview
} from './components';

@Component({
  components: {
    Header,
    IntroductionSection,
    LevelsSection,
    ContactSection,
    Overview
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
