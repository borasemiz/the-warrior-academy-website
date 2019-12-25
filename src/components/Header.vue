<template>
  <header class="header">
    <div class="wrapper navigation-wrapper">
      <nav class="navigation">
        <div class="left">
          <a href="javascript:void(0)">
            <Logo class="logo" />
          </a>
        </div>
        <div class="right">
          <a class="navigation-link active" href="javascript:void(0)">Courses</a>
          <a class="navigation-link" href="javascript:void(0)">Levels</a>
          <a class="navigation-link" href="javascript:void(0)">About Me</a>
          <a class="navigation-link" href="javascript:void(0)">Contact</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Logo } from './svg-components';

@Component({
  components: {
    Logo
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: var(--c-header-background);
  border-bottom: 2px solid var(--c-header-border-bottom);
  padding: 0.5rem 0;

  .navigation-wrapper {
    margin: 0 auto;
  }
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: $fontUbuntu;

  .logo {
    width: 10rem;
    color: white;
  }

  .right {
    display: none;
  }
}

.navigation-link {
  color: var(--c-navigation-text);
  margin: 0 1rem;

  &.active {
    color: var(--c-navigation-text-highlight);
    font-weight: bold;
  }
}

@include respond-to('small') {
  .navigation {
    .logo {
      width: 15rem;
    }

    .right {
      display: block;
    }
  }
}
</style>
