<template>
    <div class="relative h-14">
        <input type="text" :placeholder="props.placeholder"
            class="w-full pr-12 p-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-1 focus:ring-cyan-600 outline-none placeholder:text-slate-400 text-sm font-normal focus:border-cyan-600"
            :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        <MagnifyingGlassIcon class="w-6 h-6 text-slate-500 absolute top-2/4 right-4 transform -translate-y-2/4" />
    </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
const props = defineProps({
    placeholder: {
        type: String,
        default: 'placeholder'
    },

    modelValue: {
        type: String
    }
});
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped></style>