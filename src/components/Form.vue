<script setup lang="ts">
import { ref } from "vue";
const choice = ref("");
</script>

<template>
  <div>Your choice: {{ choice }}</div>

  <select v-model="choice">
    <option disabled value="">disabled option</option>
    <option>A</option>
    <option>B</option>
  </select>
</template>
