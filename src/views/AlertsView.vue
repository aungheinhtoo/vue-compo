<script setup lang="ts">
import CustomAlert from '@/components/CustomAlert/CustomAlert.vue';
const shortText = "A short descriptive header";
const longText = "This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.";
</script>
<template>
  <div class="flex flex-col gap-4 items-center justify-center">
    <CustomAlert :title="shortText" :content="longText" color="info" />
    <CustomAlert :title="shortText" :content="longText" color="warning" />
    <CustomAlert :title="shortText" :content="longText" color="error" />
    <CustomAlert :title="shortText" :content="longText" color="success" />
  </div>
</template>

<style></style>
