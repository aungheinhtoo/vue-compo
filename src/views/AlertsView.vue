<script setup lang="ts">
import CustomAlert from '@/components/CustomAlert/CustomAlert.vue';
import { AlertColor } from '@/components/CustomAlert/types';
const shortText = "A short descriptive header";
const longText = "This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.";
</script>
<template>
  <div class="alerts">
    <CustomAlert :title="shortText" :content="longText" :color="AlertColor.INFO" />
    <CustomAlert :title="shortText" :content="longText" :color="AlertColor.WARNING" />
    <CustomAlert :title="shortText" :content="longText" :color="AlertColor.ERROR" />
    <CustomAlert :title="shortText" :content="longText" :color="AlertColor.SUCCESS" />
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
