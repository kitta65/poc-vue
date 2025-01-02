<script setup lang="ts">
import { simpleGlobalState } from "@/stores/state";
</script>

<template>
  <p>update global state</p>
  <!-- call function explicitly (do not remove `()`) -->
  <button @click="simpleGlobalState.increment()">
    {{ simpleGlobalState.value }}
  </button>
</template>
