<template>
    <div
        class="p-3 bg-white rounded-2xl justify-start items-center gap-6 flex flex-wrap border border-transparent hover:border-cyan-600">
        <NuxtLink to="/course/1" class="p-4 bg-pink-500 rounded-lg flex-col justify-start items-start gap-3 flex w-72 grow">
            <div class="text-pink-200 text-xs font-normal leading-none">IT and Technology</div>
            <h3 class="text-white text-base font-bold leading-normal">{{ props.course?.title }}</h3>
            <div class="text-white text-xs font-normal leading-none">Jhankar Mahbub</div>
        </NuxtLink>

        <div class="flex flex-col gap-y-4 grow">
            <div class="text-slate-800 text-xs font-medium leading-none">Course Duration</div>
            <div class="items-center gap-1.5 flex">
                <img src="/icons/clock.svg" class="w-4 h-4" />
                <span class="text-slate-600 text-xs font-normal">20h 45m</span>
            </div>
        </div>

        <div class="flex flex-col gap-y-4 grow">
            <div class="text-slate-800 text-xs font-medium leading-none">Video Lesson</div>
            <div class="items-center gap-1.5 flex">
                <img src="/icons/video.svg" class="w-4 h-4" />
                <span class="text-slate-600 text-xs font-normal">123 Video</span>
            </div>
        </div>

        <div class="flex flex-col gap-y-4 grow">
            <div class="text-slate-800 text-xs font-medium leading-none">Enrolled Students</div>
            <div class="items-center gap-1.5 flex">
                <img src="/icons/enrollment.svg" class="w-4 h-4" />
                <span class="text-slate-600 text-xs font-normal">32</span>
            </div>
        </div>

        <div class="flex flex-col gap-y-4 grow">
            <div class="text-slate-800 text-xs font-medium leading-none">Course Fee</div>
            <div class="items-center gap-1.5 flex">
                <img src="/icons/balance.svg" class="w-4 h-4" />
                <span class="text-slate-600 text-xs font-normal">20,200</span>
            </div>
        </div>
        <NuxtLink to="/admission"
            class="p-3 rounded-[10px] border border-cyan-600 flex justify-center items-center gap-2 text-cyan-600 text-base font-medium grow">
            Enroll
            <ArrowRightIcon class="w-6 h-6 text-cyan-600" />
        </NuxtLink>
    </div>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    course: {
        type: Object,
        required: true
    }
});

</script>

<style lang="scss" scoped></style>