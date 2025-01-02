<script setup lang="ts">
import { useSimpleCountStore, usePiniaCountStore } from "@/stores/state";
const { count, increment } = useSimpleCountStore();
const piniaStore = usePiniaCountStore();
piniaStore.$onAction(({ name }) => console.log(`${name} is executed`));
</script>

<template>
  <p>update global state</p>
  <!-- call function explicitly (do not remove `()`) -->
  <button @click="increment()">smiple count:{{ count }}</button>
  <button @click="piniaStore.increment()">
    pinia: count{{ piniaStore.count }}
  </button>
</template>
