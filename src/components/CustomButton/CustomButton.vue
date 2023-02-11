<!-- import { ref, onMounted } from "vue";
enum Variant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

enum State {
  DEFAULT = "default",
}

interface Props {
  variant: Variant;
  state: State;
}
// props: ["variant", "state", "icon", "iconPosition", "text"], -->
<script setup lang="ts">
defineProps(["title", "variant", "icon", "iconPosition"]);

const getVariantSpecifics = (variant: string) => {
  if (variant === "primary") {
    return "bg-primary hover:bg-primary-hover text-black-text";
  } else if (variant === "secondary") {
    return "bg-white text-secondary border border-solid";
  }
};
</script>

<template>
  <!-- TODO: Drop shadow adjust -->
  <button
    class="flex flex-row justify-center py-2 px-6 gap-2 rounded-lg font-body font-semibold text-base hover:drop-shadow"
    :class="getVariantSpecifics(variant)"
  >
    <i :data-feather="icon" v-if="icon" class="stroke-black-text"></i>
    <span v-if="title">{{ title }}</span>
  </button>
</template>

<style scoped></style>
