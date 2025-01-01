<script setup lang="ts"></script>

<template>
  <ul>
    <li v-for="n in 5" :key="n">item-{{ n }}</li>
  </ul>
</template>
