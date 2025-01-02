<script setup lang="ts">
import { useCounter } from "@/composables/useCounter.ts";
const count = useCounter();
</script>

<template>
  <button>CounterV2: {{ count }}</button>
</template>
