<template>
    <div class="flex justify-between items-center flex-wrap bg-slate-50 px-4 py-3 rounded-lg border border-slate-100 gap-4 overflow-hidden">
        <div class="flex items-center gap-2 flex-grow w-full sm:w-60">
            <img src="/icons/GenderMale.png" class="w-10 h-10" alt="">
            <div>
                <div class="text-slate-800 text-sm font-normal leading-tight tracking-tight">
                    {{ props.student.name }}
                </div>
                <div class="inline-flex items-center gap-2">
                    <div class="text-slate-500 text-xs font-normal">
                        {{ props.student.gander }}
                    </div>
                    <div class="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <div class="text-slate-500 text-xs font-normal">
                        {{ props.student.idCode }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    student: {
        type: Object
    }
})
</script>

<style lang="scss" scoped></style>