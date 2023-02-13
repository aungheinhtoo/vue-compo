<script setup lang="ts">
import { ButtonColor, ButtonVariant } from './types';
// defineProps(["title", "color", "icon", "iconPosition", "variant"]);
defineProps<{
  title?: string;
  color: ButtonColor | string;
  icon?: string;
  iconPosition?: "left" | "right";
  variant?: ButtonVariant | string;
}>();

const getVariantColorSpecifics = (color: ButtonColor, variant?: ButtonVariant) => {
  if (variant === ButtonVariant.FILLED) {
    if (color === ButtonColor.PRIMARY) {
      return "bg-primary hover:bg-primary-hover text-black-text";
    } else if (color === ButtonColor.WARNING) {
      return "bg-warning hover:bg-warning-hover text-white";
    } else if (color === ButtonColor.ERROR) {
      return "bg-error hover:bg-error-hover text-white";
    } else if (color === ButtonColor.SUCCESS) {
      return "bg-success hover:bg-success-hover text-white";
    }
  } else if (variant === ButtonVariant.OUTLINED) {
    if (color === ButtonColor.PRIMARY) {
      return "bg-white text-primary outline outline-1 outline-solid";
    } else if (color === ButtonColor.WARNING) {
      return "bg-white text-warning outline outline-1 outline-solid";
    } else if (color === ButtonColor.ERROR) {
      return "bg-white text-error outline outline-1 outline-solid";
    } else if (color === ButtonColor.SUCCESS) {
      return "bg-white text-success outline outline-1 outline-solid";
    }
  }
  throw new Error("Unsupported Color or Variant");
};

const getOrder = (iconPosition?: string) => {
  return iconPosition === "right" ? "order-last" : "order-first";
};

const getPadding = (title?: string) => {
  if (title) {
    return "py-2 px-6";
  } else {
    return "p-2";
  }
};

const getButtonClass = (color: ButtonColor, variant?: ButtonVariant, title?: string) => {
  return `${getVariantColorSpecifics(color, variant)} ${getPadding(title)}`;
};
</script>

<template>
  <!-- TODO: Drop shadow adjust -->
  <button
    class="box-content flex flex-row justify-center gap-2 rounded-lg font-body font-semibold text-base hover:drop-shadow"
    :class="getButtonClass(color as ButtonColor, variant as ButtonVariant, title)"
  >
    <font-awesome-icon
      :icon="icon"
      v-if="icon"
      size="xl"
      :class="getOrder(iconPosition)"
      fixed-width
    />
    <span v-if="title">{{ title }}</span>
  </button>
</template>

<style scoped></style>
