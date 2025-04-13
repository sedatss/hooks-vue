<template>
  <div class="backdrop" @click="closeDialog"></div>
  <div class="dialog" :class="props.customClass">
    <header>
      <h2>{{ props.title }}</h2>
    </header>
    <div>
      <slot></slot>
    </div>
    <footer>
      <button @click="closeDialog">Close</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  title: string
  customClass?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

function closeDialog() {
  emit('close')
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
}

.dialog {
  position: fixed;
  top: 30vh;
  left: calc(50% - 15rem);
  width: 30rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  z-index: 100;
}

header {
  width: 100%;
  padding: 1rem;
  background-color: #310131;
  color: white;
}

footer {
  padding: 1rem;
  display: flex;
  justify-content: center;
}

button {
  background-color: #ccc;
  border: none;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #bbb;
}

.dialog-error header {
  background-color: #ff6b69;
}

.dialog-error button {
  background-color: #ff6b69;
  color: #ffffff;
}

.dialog-error button:hover {
  background-color: #e55d53;
}

.dialog-success header {
  background-color: #4CAF50;
}

.dialog-success button {
  background-color: #4CAF50;
  color: #ffffff;
}

.dialog-success button:hover {
  background-color: #45a049;
}
</style>
