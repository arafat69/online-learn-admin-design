<template>
    <NuxtLink :to="`/student/`+props.student.id" class="flex justify-between items-center flex-wrap bg-white px-4 py-3 rounded-lg border border-slate-100 hover:border-cyan-600 gap-3 overflow-hidden">
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
        <div class="text-slate-800 text-xs font-normal w-36 flex-grow">{{ props.student.email }}</div>
        <div class="text-slate-800 text-xs font-normal w-36 flex-grow">{{ props.student.textCode }}</div>
        <div class="flex justify-between w-38 gap-5 flex-grow xl:flex-grow-0">
            <NuxtLink :to="`/student/`+props.student.id" class="text-right text-blue-500 text-xs font-normal">
                Edit
            </NuxtLink>
            <NuxtLink to="/admission" class="text-right text-cyan-600 text-xs font-normal underline">
                Enroll to Course
            </NuxtLink>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    student: {
        type: Object
    }
})
</script>

<style lang="scss" scoped></style>