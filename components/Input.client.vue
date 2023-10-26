<template>
    <div class="inline-flex gap-1 flex-col w-full mb-3">
        <label class="text-slate-800 text-sm font-normal">
            {{ props.label }}
            <span v-if="props?.required" class="text-red-600 text-sm font-normal">*</span>
        </label>
        <input :type="props?.type"
            class="form-input px-4 py-3.5 bg-white rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-300 text-sm font-normal focus:ring-1 outline-none focus:ring-cyan-600 focus:border-cyan-600"
            :placeholder="props.placeholder"  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>

<script setup>
const props = defineProps({
    label:{
        type: String
    },
    placeholder:{
        type: String,
        default: 'placeholder'
    },

    required:{
        type: Boolean,
        default: false
    },

    type:{
        type: String,
        default: 'text'
    },
    modelValue:{
        type: String
    }
});
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped></style>