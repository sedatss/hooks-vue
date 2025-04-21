<template>
  <view-alerts
      v-if="alertIsVisible"
      title="Error 404"
      customClass="dialog-error"
      @close="hideAlert"
  >
  <p>This is an error!</p>
  </view-alerts>

  <section>
    <h2>Show an error</h2>
    <button @click="showAlert">Show Error</button>
  </section>
</template>

<script setup lang="ts">
import ViewAlerts from './ViewAlerts.vue'
import useAlert from "@/composables/alert"

const { alertIsVisible, showAlert, hideAlert } = useAlert()
</script>
