<script setup lang="ts">
import CustomAlert from "@/components/CustomAlert/CustomAlert.vue";
import { ref } from "vue";
const shortText = "A short descriptive header";
const longText =
    "This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.";

const alertsOpen = ref(new Array<number>(16).fill(1));
function onClickHandler() {
    console.log("clicked");
}

function handleDelete(index: number) {
    alertsOpen.value[index] = 0;
}
</script>
<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col items-center justify-center gap-4">
            <CustomAlert
                :title="shortText"
                :content="longText"
                color="info"
                filledButtonTitle="Action"
                outlinedButtonTitle="Action"
                :filledButtonOnClick="onClickHandler"
                :outlinedButtonOnClick="onClickHandler"
                @delete="handleDelete(0)"
                v-if="alertsOpen[0] === 1"
            />
            <CustomAlert
                :title="shortText"
                :content="longText"
                color="warning"
                filledButtonTitle="Action"
                outlinedButtonTitle="Action"
                :filledButtonOnClick="onClickHandler"
                :outlinedButtonOnClick="onClickHandler"
                @delete="handleDelete(1)"
                v-if="alertsOpen[1] === 1"
            />
            <CustomAlert
                :title="shortText"
                :content="longText"
                color="error"
                filledButtonTitle="Action"
                outlinedButtonTitle="Action"
                :filledButtonOnClick="onClickHandler"
                :outlinedButtonOnClick="onClickHandler"
                @delete="handleDelete(2)"
                v-if="alertsOpen[2] === 1"
            />
            <CustomAlert
                :title="shortText"
                :content="longText"
                color="success"
                filledButtonTitle="Action"
                outlinedButtonTitle="Action"
                :filledButtonOnClick="onClickHandler"
                :outlinedButtonOnClick="onClickHandler"
                @delete="handleDelete(3)"
                v-if="alertsOpen[3] === 1"
            />
        </div>
        <div class="flex flex-col items-center justify-center gap-4">
            <CustomAlert
                :title="shortText"
                :content="longText"
                color="info"
                @delete="handleDelete(4)"
                v-if="alertsOpen[4] === 1"
            />
            <CustomAlert
                :title="shortText"
                :content="longText"
                color="warning"
                @delete="handleDelete(5)"
                v-if="alertsOpen[5] === 1"
            />
            <CustomAlert
                :title="shortText"
                :content="longText"
                color="error"
                @delete="handleDelete(6)"
                v-if="alertsOpen[6] === 1"
            />
            <CustomAlert
                :title="shortText"
                :content="longText"
                color="success"
                @delete="handleDelete(7)"
                v-if="alertsOpen[7] === 1"
            />
        </div>
        <div class="flex flex-col items-center justify-center gap-4">
            <CustomAlert
                :title="shortText"
                color="info"
                @delete="handleDelete(8)"
                v-if="alertsOpen[8] === 1"
            />
            <CustomAlert
                :title="shortText"
                color="warning"
                @delete="handleDelete(9)"
                v-if="alertsOpen[9] === 1"
            />
            <CustomAlert
                :title="shortText"
                color="error"
                @delete="handleDelete(10)"
                v-if="alertsOpen[10] === 1"
            />
            <CustomAlert
                :title="shortText"
                color="success"
                @delete="handleDelete(11)"
                v-if="alertsOpen[11] === 1"
            />
        </div>
        <div class="flex flex-col items-center justify-center gap-4">
            <CustomAlert
                :content="shortText"
                color="info"
                @delete="handleDelete(12)"
                v-if="alertsOpen[12] === 1"
            />
            <CustomAlert
                :content="shortText"
                color="warning"
                @delete="handleDelete(13)"
                v-if="alertsOpen[13] === 1"
            />
            <CustomAlert
                :content="shortText"
                color="error"
                @delete="handleDelete(14)"
                v-if="alertsOpen[14] === 1"
            />
            <CustomAlert
                :content="shortText"
                color="success"
                @delete="handleDelete(15)"
                v-if="alertsOpen[15] === 1"
            />
        </div>
    </div>
</template>

<style></style>
