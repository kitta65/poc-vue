<script setup lang="ts">
import { useSimpleCounter } from "@/stores/state";
const { count, increment } = useSimpleCounter();
</script>

<template>
  <p>update global state</p>
  <!-- call function explicitly (do not remove `()`) -->
  <button @click="increment()">
    {{ count }}
  </button>
</template>
