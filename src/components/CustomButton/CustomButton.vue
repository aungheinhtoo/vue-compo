<script setup lang="ts">
defineProps(["title", "color", "icon", "iconPosition", "variant"]);


const getVariantColorSpecifics = (variant: string, color: string) => {
  if (variant === "filled") {
    return `bg-${color} hover:bg-${color}-hover text-${color === "primary" ? "black-text" : "white"}`;
  } else if (variant === "outlined") {
    return `bg-white text-${color} outline outline-1 outline-solid`;
  }
};

const getOrder = (iconPosition: string) => {
  return iconPosition === "right" ? "order-last" : "order-first";
};

const getPadding = (title: string) => {
  if (title) {
    return "py-2 px-6";
  } else {
    return "p-2";
  }
};

const getButtonClass = (color: string, title: string, variant: string) => {
  return `${getVariantColorSpecifics(variant, color)} ${getPadding(title)}`;
};
</script>

<template>
  <!-- TODO: Drop shadow adjust -->
  <button
    class="box-content flex flex-row justify-center gap-2 rounded-lg font-body font-semibold text-base hover:drop-shadow"
    :class="getButtonClass(color, title, variant)"
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
