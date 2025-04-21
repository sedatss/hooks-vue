<template>
  <view-alerts
      v-if="alertIsVisible"
      title="Success"
      customClass="dialog-success"
      @close="hideAlert"
  >
    <p>Successful</p>
  </view-alerts>

  <section>
    <h2>Show a success</h2>
    <button @click="showAlert">Show success</button>
  </section>
</template>

<script setup lang="ts">
import ViewAlerts from './ViewAlerts.vue';
import useAlert from "@/composables/alert";

const { alertIsVisible, showAlert, hideAlert } = useAlert()
</script>

