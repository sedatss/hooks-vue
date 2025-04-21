<template>
  <view-error></view-error>
  <view-success></view-success>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ViewError from "@/components/ViewError.vue";
import ViewSuccess from "@/components/ViewSuccess.vue";

export default defineComponent({
  name: 'App',
  components: {
    ViewError,
    ViewSuccess,
  }
});
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  text-align: center;
}

main {
  width: 40rem;
  margin: 3rem auto;
}

section {
  width: 500px;
  margin: 2rem auto;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

button {
  font: inherit;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #333;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
  border-color: #999;
  color: #222;
}
</style>
