<script setup lang="ts">
import CustomButton from "@/components/CustomButton/CustomButton.vue";
function clickHandler() {
    console.log("hello!");
}
</script>

<template>
    <main>
        <div class="center flex flex-col gap-3">
            <div class="flex gap-3">
                <CustomButton
                    title="Action"
                    color="primary"
                    icon="arrow-left"
                    variant="filled"
                    :onClick="clickHandler"
                />
                <CustomButton title="Action" color="primary" variant="filled" />
                <CustomButton
                    title="Action"
                    color="primary"
                    icon="arrow-right"
                    icon-position="right"
                    variant="filled"
                    :onClick="clickHandler"
                />
                <CustomButton
                    color="primary"
                    icon="fa-solid fa-arrow-left"
                    icon-position="right"
                    variant="filled"
                    :onClick="clickHandler"
                />
            </div>
            <div class="flex gap-3">
                <CustomButton
                    title="Action"
                    color="warning"
                    icon="arrow-left"
                    variant="outlined"
                    :onClick="clickHandler"
                />
                <CustomButton
                    title="Action"
                    color="warning"
                    variant="outlined"
                    :onClick="clickHandler"
                />
                <CustomButton
                    title="Action"
                    color="warning"
                    icon="arrow-right"
                    icon-position="right"
                    variant="outlined"
                    :onClick="clickHandler"
                />
                <CustomButton
                    color="warning"
                    icon="arrow-right"
                    icon-position="right"
                    variant="outlined"
                    :onClick="clickHandler"
                />
            </div>
        </div>
    </main>
</template>
