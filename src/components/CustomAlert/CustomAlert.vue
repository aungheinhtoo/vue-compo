<script setup lang="ts">
import CustomButton from '../CustomButton/CustomButton.vue';

defineProps(["title", "color", "content"]);
</script>

<template>
  <div class="outline outline-1">
    <font-awesome-icon icon="fa-solid fa-circle-info" size="xl" fixed-width />
    <div class="font-body text-base font-semibold">
      {{ title }}
    </div>
    <div class="font-body text-base font-normal">
      {{ content }}
    </div>
    <div>
      <CustomButton title="Action" color="secondary" />
    </div>
    <font-awesome-icon icon="fa-solid fa-xmark" size="xl" fixed-width />
  </div>
</template>

<style scoped></style>
