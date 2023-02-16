<script setup lang="ts">
import CustomButton from "@/components/CustomButton/CustomButton.vue";
function clickMe() {
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
                    :onClick="clickMe"
                />
                <CustomButton title="Action" color="primary" variant="filled" />
                <CustomButton
                    title="Action"
                    color="primary"
                    icon="arrow-right"
                    icon-position="right"
                    variant="filled"
                />
                <CustomButton
                    color="primary"
                    icon="fa-solid fa-arrow-left"
                    icon-position="right"
                    variant="filled"
                />
            </div>
            <div class="flex gap-3">
                <CustomButton
                    title="Action"
                    color="warning"
                    icon="arrow-left"
                    variant="outlined"
                />
                <CustomButton
                    title="Action"
                    color="warning"
                    variant="outlined"
                />
                <CustomButton
                    title="Action"
                    color="warning"
                    icon="arrow-right"
                    icon-position="right"
                    variant="outlined"
                />
                <CustomButton
                    color="warning"
                    icon="arrow-right"
                    icon-position="right"
                    variant="outlined"
                />
            </div>
        </div>
    </main>
</template>
