export const vue = `<template>
  <section>
    <h1>Todo List</h1>
    <ul>
      <li v-for="(thing, index) in things" :key="index">{{ thing }}</li>
    </ul>
    <input type="text" v-model="thingToBeAdded" />
    <button @click="addThing">Add Thing</button>
  </section>
</template>

<script>
export default {
  name: 'todo-list',
  data: function() {
    return {
      things: [],
      thingToBeAdded: ''
    };
  },
  methods: {
    addThing() {
      this.things.push(this.thingToBeAdded);
      this.thingToBeAdded = '';
    }
  }
};
</script>`;