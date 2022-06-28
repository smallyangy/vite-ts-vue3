<template>
    <div
        p="y-2 x-4"
        border="2 rounded blue-200"
    >
        {{ title }}
    </div>
    <button
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        border="2 rounded blue-200"
    >
        Button
    </button>
    <div
        w="300px"
        h="500px"
        border="2px solid #ccc"
        class="flex-c"
    >
        abc
    </div>
    <div class="a-1">
        1
    </div>
    <div class="a-2">
        2
    </div>
    <div class="a-3">
        3
    </div>
    <div class="a-4">
        4
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            default: ''
        }
    });
    const a = 12;
</script>

<style lang="scss">
    .a-1 {
        font-size: 20px;
        color: red;
    }

    .a-2 {
        font-size: 20px;
        color: black;
    }

    .a-3 {
        font-size: 20px;
        color: white;
    }

    .a-4 {
        font-size: 20px;
        color: orange;
    }
</style>
