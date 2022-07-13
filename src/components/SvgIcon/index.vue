<template>
    <svg>
        <use
            :href="symbolId"
            :fill="color"
            :props="props"
        />
    </svg>
</template>


<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps({
        name: {
            type: String,
            default: ''
        },
        prefix: {
            type: String,
            default: 'icon'
        },
        color: {
            type: String,
            default: '#333'
        }
    })

    const symbolId = ref(`#${props.prefix}-${props.name}`);
</script>
