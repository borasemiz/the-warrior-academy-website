<template>
  <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M50.03 12 a 25 30, 0 0, 0, -25 30 c 0 0, 0 20, 25 65" fill="#E29D03" class="face left" />
    <path d="M49.97 12 a 25 30, 0 0, 1, 25 30 c 0 0, 0 20, -25 65" fill="#FFC107" class="face right" />

    <polygon points="47 12, 50 24, 53 12, 50 2" fill="#C48506" class="helmet-top" />

    <polygon points="30 43, 35 61, 46 56" fill="#013214" class="eye left"/>
    <polygon points="70 43, 65 61, 54 56" fill="#013214" class="eye right"/>

    <path d="M25.3 41.7 c 0 0, 0 20, 25 65 c 0 0, -20, 0, -40 -20 c 8 -8, 10 -20, 15 -45" fill="#C48506" class="plate left" />
    <path d="M74.7 41.7 c 0 0, 0 20, -25 65 c 0 0, 20 0, 40 -20 c -8 -8, -10 -20, -15 -45" fill="#F4AB19" class="plate right" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>