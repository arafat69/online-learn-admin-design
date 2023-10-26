<template>
    <div>
        <Header>
            <Breadcumb active="Courses" />
            <NuxtLink to="/admission" class="btn-primary">
                <img src="/icons/new_admission.svg" alt="">
                New Admission
            </NuxtLink>
        </Header>
        <MainContent>
            <div class="flex gap-4 mb-4">
                <InputSearch placeholder="Search Course" class="grow" />
                <select name=""
                    class="py-4 grow max-w-sm bg-slate-50 rounded-xl border border-slate-200 focus:ring-1 focus:ring-cyan-600 outline-none placeholder:text-slate-400 text-sm font-normal focus:border-cyan-600">
                    <option value="">All</option>
                </select>
            </div>

            <div class="pl-4 pr-6 py-4  bg-slate-100 rounded-2xl flex-col gap-y-2 flex max-h-[calc(100vh_-_234px)] overflow-y-scroll">

                <CourseItem v-for="course in cources" :key="course.id" :course="course" />

                <ClientOnly>
                    <div class="flex gap-4 justify-between flex-wrap mt-3 items-center">
                        <div class="text-black text-base font-normal font-['Poppins'] leading-normal">
                            Showing 10 of 36 results
                        </div>
                        <vue-awesome-paginate :total-items="50" :items-per-page="5" v-model="currentPage"
                            :max-pages-shown="4" :on-click="onClickHandler"
                            paginate-buttons-class="w-12 h-12 p-2 rounded-[48px] border border-slate-300 text-slate-600 text-sm font-semibold font-['Poppins'] leading-tight mx-1"
                            active-page-class="bg-cyan-600 border-cyan-600 text-white"
                            back-button-class="hover:bg-cyan-600 hover:text-white hover:border-cyan-600 text-lg"
                            next-button-class="hover:bg-cyan-600 hover:text-white hover:border-cyan-600 text-lg" />
                    </div>
                </ClientOnly>

            </div>

        </MainContent>
    </div>
</template>

<script setup>
import { ref } from "vue";

useSeoMeta({
    title: 'Courses',
});

const currentPage = ref(1);

const onClickHandler = (page) => {
    console.log(page);
};

const cources = [
    {
        thumbnail: '/icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: '/icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: '/icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: '/icons/course-thumbnail.svg',
        title: 'Professional Web Development',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: '/icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: '/icons/course-thumbnail.svg',
        title: 'Professional Web Development',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
];
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 6px;
    border-radius: 12px;
}

/* Track */
::-webkit-scrollbar-track {
    background: rgb(241 245 249);
    border-radius: 12px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgb(148 163 184);
    border-radius: 12px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}</style>