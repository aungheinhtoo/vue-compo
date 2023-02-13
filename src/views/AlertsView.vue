<script setup lang="ts">
import CustomAlert from '@/components/CustomAlert/CustomAlert.vue';
import { AlertColor } from '@/components/CustomAlert/types';
const shortText = "A short descriptive header";
const longText = "This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.";
</script>
<template>
  <div class="alerts">
    <CustomAlert :title="shortText" :content="longText" color="info" />
    <CustomAlert :title="shortText" :content="longText" color="warning" />
    <CustomAlert :title="shortText" :content="longText" color="error" />
    <CustomAlert :title="shortText" :content="longText" color="success" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .alerts {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
}
</style>
