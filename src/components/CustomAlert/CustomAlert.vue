<script setup lang="ts">
import CustomButton from '../CustomButton/CustomButton.vue';
import { ButtonVariant, ButtonColor } from '../CustomButton/types';
import { AlertColor } from "./types"

// defineProps(["title", "color", "content"]);
defineProps<{
  title?: string;
  color: AlertColor;
  content?: string;
}>();
const getIconClasses = (color: AlertColor) => {
  if (color === "info") {
    return "fa-solid fa-circle-info";
  } else if (color === AlertColor.ERROR) {
    return "fa-solid fa-circle-exclamation";
  } else if (color === AlertColor.SUCCESS) {
    return "fa-solid fa-circle-check";
  } else if (color === AlertColor.WARNING) {
    return "fa-solid fa-triangle-exclamation";
  }
}

const getAlertClasses = (color: AlertColor) => {
  if (color === AlertColor.INFO) {
    return "outline-info bg-info-bg text-info";
  } else if (color === AlertColor.ERROR) {
    return "outline-error bg-error-bg text-error";
  } else if (color === AlertColor.SUCCESS) {
    return "outline-success bg-success-bg text-success";
  } else if (color === AlertColor.WARNING) {
    return "outline-warning bg-warning-bg text-warning";
  }
}
</script>

<template>
  <div class="flex outline outline-1 rounded-[4px]" :class="getAlertClasses(color)">
    <font-awesome-icon :icon="getIconClasses(color)" size="xl" fixed-width />
    <div class="block">
      <div class="font-body text-base text-black-text font-semibold">
        {{ title }}
      </div>
      <div class="font-body text-base text-black-text font-normal">
        {{ content }}
      </div>
      <div class="flex gap-4">
        <CustomButton title="Action" :color="color === AlertColor.INFO ? ButtonColor.WARNING : color" :variant="ButtonVariant.OUTLINED" />
        <CustomButton title="Action" :color="color === AlertColor.INFO ? ButtonColor.PRIMARY : color" :variant="ButtonVariant.FILLED" />
      </div>
    </div>
    <font-awesome-icon icon="fa-solid fa-xmark" size="xl" fixed-width class="text-gray" />
  </div>
</template>

<style scoped></style>
