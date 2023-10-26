<template>
    <label class="text-slate-800 text-sm font-normal">
        {{ props.title }}
        <span v-if="props?.required" class="text-red-600 text-sm font-normal">*</span>
    </label>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'label'
    },
    required: {
        type: Boolean,
        default: false
    },
});
</script>