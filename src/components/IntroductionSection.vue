<template>
  <section class="introduction-section">
    <header>
      <WarriorIllustration class="intro-image" />
      <h1>Welcome to the Warrior Academy</h1>
    </header>
    <div class="content">
      <CodePreview
        titleText="welcome.js"
        :sourceCode="welcomeProgramSource"
      />
      <p>
        Hello, my name is <span>Bora</span>. I am a frontend <span>developer</span> and
        <span>instructor</span>. I will teach you frontend and software development.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { WarriorIllustration } from './svg-components';
import CodePreview from './CodePreview.vue';

@Component({
  components: {
    WarriorIllustration,
    CodePreview
  }
})
export default class extends Vue {
  public welcomeProgramSource: string = `function helloWorld() {<br />  console.log('Hello World!');<br />}`;
}
</script>

<style lang="scss" scoped>
.introduction-section {
  display: grid;
  width: 100%;
  grid-template-columns: minmax(0, 1fr);
  align-items: flex-end;

  header,
  .content {
    flex: 1 0 0;
  }

  header {
    text-align: center;
    color: var(--c-introduction-header-text);
  }

  .content {
    color: var(--c-introduction-content-text);

    p {
      text-align: center;
      font-size: 1.5rem;
    }
  }

  .intro-image {
    width: 15rem;
    margin: 0 auto;
  }
}

@include respond-to('medium') {
  .introduction-section {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  
    .content {
      p {
        text-align: left;
      }
    }
  }
}
</style>
