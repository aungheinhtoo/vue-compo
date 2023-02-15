<script setup lang="ts">
import CustomAlert from '@/components/CustomAlert/CustomAlert.vue';
const shortText = "A short descriptive header";
const longText = "This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.";

function onClickHandler() {
  console.log('clicked');
}
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4 items-center justify-center">
      <CustomAlert :title="shortText" :content="longText" color="info" filledButtonTitle="Action" outlinedButtonTitle="Action" :filledButtonOnClick="onClickHandler" :outlinedButtonOnClick="onClickHandler" />
      <CustomAlert :title="shortText" :content="longText" color="warning" filledButtonTitle="Action" outlinedButtonTitle="Action" :filledButtonOnClick="onClickHandler" :outlinedButtonOnClick="onClickHandler" />
      <CustomAlert :title="shortText" :content="longText" color="error" filledButtonTitle="Action" outlinedButtonTitle="Action" :filledButtonOnClick="onClickHandler" :outlinedButtonOnClick="onClickHandler" />
      <CustomAlert :title="shortText" :content="longText" color="success" filledButtonTitle="Action" outlinedButtonTitle="Action" :filledButtonOnClick="onClickHandler" :outlinedButtonOnClick="onClickHandler" />
    </div>
    <div class="flex flex-col gap-4 items-center justify-center">
      <CustomAlert :title="shortText" :content="longText" color="info" />
      <CustomAlert :title="shortText" :content="longText" color="warning" />
      <CustomAlert :title="shortText" :content="longText" color="error" />
      <CustomAlert :title="shortText" :content="longText" color="success" />
    </div>
    <div class="flex flex-col gap-4 items-center justify-center">
      <CustomAlert :title="shortText" color="info" />
      <CustomAlert :title="shortText" color="warning" />
      <CustomAlert :title="shortText" color="error" />
      <CustomAlert :title="shortText" color="success" />
    </div>
    <div class="flex flex-col gap-4 items-center justify-center">
      <CustomAlert :content="shortText" color="info" />
      <CustomAlert :content="shortText" color="warning" />
      <CustomAlert :content="shortText" color="error" />
      <CustomAlert :content="shortText" color="success" />
    </div>
  </div>
</template>

<style></style>
