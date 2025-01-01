<script setup lang="ts">
defineProps(["text"]);
</script>

<template>
  <p>text: {{ text }}</p>
  <p>slot: <slot /></p>
</template>
