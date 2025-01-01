<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
function increment() {
  count.value++;
}
</script>

<template>
  <p>count is: {{ count }}</p>
  <button @click="count++">count++</button>
  <button @click="() => count++">() => count++</button>
  <button @click="increment">increment</button>
</template>
