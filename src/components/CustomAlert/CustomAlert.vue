<script setup lang="ts">
import CustomButton from '../CustomButton/CustomButton.vue';
import { ButtonColor } from '../CustomButton/types';
import { AlertColor } from "./types";

const props = defineProps<{
  title?: string;
  color: AlertColor | string;
  content?: string;
  filledButtonTitle?: string;
  outlinedButtonTitle?: string;
  filledButtonOnClick?: Function;
  outlinedButtonOnClick?: Function;
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

const handleOutlinedClick = () => {
  props.outlinedButtonOnClick ? props.outlinedButtonOnClick() : null;
};

const handleFilledClick = () => {
  props.filledButtonOnClick ? props.filledButtonOnClick() : null;
};

</script>

<template>
  <div class="flex justify-between outline outline-1 rounded-[4px] w-9/12" :class="getAlertClasses(color as AlertColor)">
    <div class="flex justify-between gap-2 w-full" :class="(title) ? 'm-4' : 'm-2'">
      <font-awesome-icon
        :icon="getIconClasses(color as AlertColor)"
        size="xl"
        fixed-width
        class="grow-0"
      />
      <div class="flex flex-col gap-4 grow">
        <div class="flex flex-col gap-2">
          <div v-if="title" class="font-body text-base text-black-text font-semibold">
            {{ title }}
          </div>
          <div v-if="content" class="font-body text-base text-black-text font-normal">
            {{ content }}
          </div>
        </div>
        <div v-if="filledButtonTitle || outlinedButtonTitle" class="flex sm:flex-row flex-col items-start gap-4">
          <CustomButton
            title="Action"
            :color="color === AlertColor.INFO ? ButtonColor.WARNING : color"
            variant="outlined"
            :onClick="handleOutlinedClick"
          />
          <CustomButton
            title="Action"
            :color="color === AlertColor.INFO ? ButtonColor.PRIMARY : color"
            variant="filled"
            :onClick="handleFilledClick"
          />
        </div>
      </div>
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        size="sm"
        fixed-width
        class="text-gray grow-0 cursor-pointer"
        :class="(title && content) ? null : 'self-center'"
      />
    </div>
  </div>
</template>

<style scoped></style>
