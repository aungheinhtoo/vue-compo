<script setup lang="ts">
import CustomAlert from '@/components/CustomAlert/CustomAlert.vue';
const shortText = "A short descriptive header";
const longText = "This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.";
</script>
<template>
  <div class="alerts">
    <CustomAlert :title="shortText" :content="longText" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .alerts {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
