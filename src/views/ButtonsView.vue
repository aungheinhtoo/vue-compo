<script setup lang="ts">
import CustomButton from "@/components/CustomButton/CustomButton.vue";
</script>

<template>
  <main>
    <div class="flex flex-col gap-3 center">
      <div class="flex gap-3">
        <CustomButton
          title="Action"
          variant="primary"
          icon="arrow-left"
        ></CustomButton>
        <CustomButton title="Action" variant="primary"></CustomButton>
        <CustomButton
          title="Action"
          variant="primary"
          icon="arrow-right"
          icon-position="right"
        ></CustomButton>
        <CustomButton
          variant="primary"
          icon="arrow-right"
          icon-position="right"
        ></CustomButton>
      </div>
      <div class="flex gap-3">
        <CustomButton
          title="Action"
          variant="secondary"
          icon="arrow-left"
        ></CustomButton>
        <CustomButton title="Action" variant="secondary"></CustomButton>
        <CustomButton
          title="Action"
          variant="secondary"
          icon="arrow-right"
          icon-position="right"
        ></CustomButton>
        <CustomButton
          variant="secondary"
          icon="arrow-right"
          icon-position="right"
        ></CustomButton>
      </div>
    </div>
  </main>
</template>
