<template>
    <div class="bg-white rounded-xl border border-slate-100 justify-start items-center gap-4 flex p-2 w-full">
        <img :src="props.course?.thumbnail" class="w-[100px] h-20 rounded-lg">
        <div class="w-full">
            <div class="line-clamp-1 text-ellipsis text-slate-800 text-sm font-normal">
                {{ props.course?.title }}
            </div>
            <div class="text-slate-600 text-xs font-normal pt-[6px]">
                {{ props.course?.author }}
            </div>
            <div class="justify-between items-center gap-6 flex pt-3">
                <div class="items-center gap-1.5 flex">
                    <img src="/icons/clock.svg" class="w-4 h-4" />
                    <span class="text-slate-600 text-xs font-normal">
                        {{ props.course?.time }}
                    </span>
                </div>
                <div class="items-center gap-1.5 flex">
                    <img src="/icons/video.svg" class="w-4 h-4" />
                    <span class="text-slate-600 text-xs font-normal">
                        {{ props.course?.video }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    course: {
        type: Object,
        required: true
    }
});
</script>

<style lang="scss" scoped></style>