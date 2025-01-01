<script setup lang="ts">
import { ref, watch } from "vue";
const state = ref(false);
watch(state, (new_, old) => {
  console.log("old value", old);
  console.log("new value", new_);
});
</script>

<template>
  <button @click="state = !state">log by watch</button>
</template>
