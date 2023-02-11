<script setup lang="ts">
defineProps(["title", "variant", "icon", "iconPosition"]);

const getVariantSpecifics = (variant: string) => {
  if (variant === "primary") {
    return "bg-primary hover:bg-primary-hover text-black-text";
  } else if (variant === "secondary") {
    return "bg-white text-secondary outline outline-1 outline-solid";
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

const getButtonClass = (variant: string, title: string) => {
  return `${getVariantSpecifics(variant)} ${getPadding(title)}`;
}
</script>

<template>
  <!-- TODO: Drop shadow adjust -->
  <button
    class="box-content flex flex-row justify-center gap-2 rounded-lg font-body font-semibold text-base hover:drop-shadow"
    :class="getButtonClass(variant, title)"
  >
    <font-awesome-icon
      :icon="icon"
      v-if="icon"
      size="xl"
      :class="getOrder(iconPosition)"
    />
    <span v-if="title">{{ title }}</span>
  </button>
</template>

<style scoped></style>
