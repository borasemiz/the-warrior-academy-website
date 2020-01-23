<template>
  <section>
    <form class="contact-form" @submit.prevent="handleFormSubmit($event)">
      <FormField identifier="firstname" label="First name" />
      <FormField class="last-name-field" identifier="lastname" label="Last name" />

      <FormField inputType="email" identifier="email" label="Email Address" />
      <div class="email-or-phone">or</div>
      <FormField inputType="tel" identifier="phone" label="Phone Number" />

      <div class="message-field">
        <label class="label" for="message">Message</label>
        <TextArea class="message-field" identifier="message" />
      </div>

      <div class="form-submit">
        <button type="submit">Send</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import FormField from './FormField.vue';
import TextArea from './TextArea.vue';

@Component({
  components: {
    FormField,
    TextArea
  }
})
export default class extends Vue {
  public handleFormSubmit(event: Event): void {
    const form: HTMLFormElement = event.target as HTMLFormElement;
    const formdata = new FormData(form);
    console.log(Array.from(formdata.keys()).reduce((acc: any, cur) => {
      acc[cur] = formdata.get(cur);
      return acc;
    }, {}));
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  display: grid;
  grid-row-gap: 20px;
  row-gap: 20px;
}

.message-field {
  width: 100%;
}

@include respond-to('medium') {
  .contact-form {
    grid-template-columns: 48% 4% 48%;
  }

  .email-or-phone {
    justify-self: center;
    align-self: center;
  }

  .last-name-field {
    grid-column-start: 3;
  }

  .message-field {
    grid-column: 1 / 4;
  }
  
  .form-submit {
    grid-column-start: 3;
    text-align: right;
  }
}
</style>
