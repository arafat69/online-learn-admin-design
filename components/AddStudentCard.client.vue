<template>
    <label :for="`student`+props.student.id" class="flex justify-between items-center flex-wrap px-4 py-3 bg-white rounded-lg border border-slate-200 gap-4 overflow-hidden peer-checked:border-cyan-600">
        <input type="checkbox" name="" :id="`student`+props.student.id" class="w-5 h-5 border border-slate-400 text-cyan-600 rounded-md focus:ring-transparent peer"/>
        <div class="flex items-center gap-2 flex-grow w-full sm:w-60">
            <img src="/icons/GenderMale.png" class="w-10 h-10" alt="">
            <div>
                <div class="text-slate-800 text-sm font-normal">{{ props.student.name }}</div>
                <div class="inline-flex items-center gap-2">
                    <div class="text-slate-500 text-xs font-normal">{{ props.student.gander }}</div>
                    <div class="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <div class="text-slate-500 text-xs font-normal">{{ props.student.idCode }}</div>
                </div>
            </div>
        </div>
        <div class="text-slate-800 text-xs font-normal w-36 flex-grow">{{ props.student.phone }}</div>
        <div class="text-slate-800 text-xs font-normal w-36 flex-grow">{{ props.student.textCode }}</div>
    </label>
</template>

<script setup>
const props = defineProps({
    student: {
        type: Object
    },

})
</script>

<style lang="scss" scoped></style>