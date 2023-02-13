<script setup lang="ts">
import CustomButton from '../CustomButton/CustomButton.vue';
import { ButtonVariant, ButtonColor } from '../CustomButton/types';
import { AlertColor } from "./types"

defineProps<{
  title?: string;
  color: AlertColor | string;
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
  <div class="flex outline outline-1 rounded-[4px]" :class="getAlertClasses(color as AlertColor)">
    <div class="flex justify-around gap-2 m-4">
      <font-awesome-icon :icon="getIconClasses(color as AlertColor)" size="xl" fixed-width />
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div class="font-body text-base text-black-text font-semibold">
            {{ title }}
          </div>
          <div class="font-body text-base text-black-text font-normal">
            {{ content }}
          </div>
        </div>
        <div class="flex sm:flex-row flex-col items-start gap-4">
          <CustomButton title="Action" :color="color === AlertColor.INFO ? ButtonColor.WARNING : color" variant="outlined" />
          <CustomButton title="Action" :color="color === AlertColor.INFO ? ButtonColor.PRIMARY : color" variant="filled" />
        </div>
      </div>
          <font-awesome-icon icon="fa-solid fa-xmark" size="sm" fixed-width class="text-gray" />
    </div>
  </div>
</template>

<style scoped></style>
