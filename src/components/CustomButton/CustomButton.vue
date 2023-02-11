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
defineProps(["title", "icon", "variant", "icon", "iconPosition"]);
</script>

<template>
  <button
    class="flex flex-row justify-center py-2 px-6 gap-2 rounded-lg font-['Open_Sans'] font-semibold text-base"
  >
    {{ icon }}{{ title }}
  </button>
</template>

<style scoped>
.primary {
  background: #f7ba50;
}

.primary:hover {
  background: #f5ab2b;
}

.secondary {
  color: green;
}
</style>
