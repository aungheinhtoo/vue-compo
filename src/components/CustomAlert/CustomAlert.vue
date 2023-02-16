<script setup lang="ts">
import CustomButton from "../CustomButton/CustomButton.vue";
import { ButtonColor } from "../CustomButton/types";
import { AlertColor } from "./types";
import { defineEmits } from "vue";

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
};

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
};

const handleOutlinedClick = () => {
    props.outlinedButtonOnClick ? props.outlinedButtonOnClick() : null;
};

const handleFilledClick = () => {
    props.filledButtonOnClick ? props.filledButtonOnClick() : null;
};

const emits = defineEmits(["delete"]);
function deleteComponent() {
    emits("delete");
}
</script>

<template>
    <div
        class="flex w-9/12 justify-between rounded-[4px] outline outline-1"
        :class="getAlertClasses(color as AlertColor)"
    >
        <div
            class="flex w-full justify-between gap-2"
            :class="title ? 'm-4' : 'm-2'"
        >
            <font-awesome-icon
                :icon="getIconClasses(color as AlertColor)"
                size="xl"
                fixed-width
                class="grow-0"
            />
            <div class="flex grow flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <div
                        v-if="title"
                        class="font-body text-base font-semibold text-black-text"
                    >
                        {{ title }}
                    </div>
                    <div
                        v-if="content"
                        class="font-body text-base font-normal text-black-text"
                    >
                        {{ content }}
                    </div>
                </div>
                <div
                    v-if="filledButtonTitle || outlinedButtonTitle"
                    class="flex flex-col items-start gap-4 sm:flex-row"
                >
                    <CustomButton
                        title="Action"
                        :color="
                            color === AlertColor.INFO
                                ? ButtonColor.WARNING
                                : color
                        "
                        variant="outlined"
                        :onClick="handleOutlinedClick"
                    />
                    <CustomButton
                        title="Action"
                        :color="
                            color === AlertColor.INFO
                                ? ButtonColor.PRIMARY
                                : color
                        "
                        variant="filled"
                        :onClick="handleFilledClick"
                    />
                </div>
            </div>
            <font-awesome-icon
                icon="fa-solid fa-xmark"
                size="sm"
                fixed-width
                class="grow-0 cursor-pointer text-gray"
                :class="title && content ? null : 'self-center'"
                @click="deleteComponent"
            />
        </div>
    </div>
</template>

<style scoped></style>
