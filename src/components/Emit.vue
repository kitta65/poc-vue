<script setup lang="ts">
const emit = defineEmits(["custom-event"]);
</script>

<template>
  <button @click="emit('custom-event')">emit!</button>
</template>
