<script setup lang="ts">
import Counter from "./components/Counter.vue";
import Emit from "./components/Emit.vue";
import List from "./components/List.vue";
import Form from "./components/Form.vue";
import Watch from "./components/Watch.vue";
import Property from "./components/Property.vue";
</script>

<template>
  <Counter />
  <List />
  <Form />
  <Watch />
  <Emit @custom-event="console.log('received custom-event!')" />
  <Property text="pass as props">pass as slot</Property>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
