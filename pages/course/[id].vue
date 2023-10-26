<template>
    <div>
        <Header>
            <Breadcumb item="Courses" item-link="/course" active="Course Details" />
            <NuxtLink to="/admission" class="btn-primary">
                <img src="/icons/new_admission.svg" alt="">
                New Admission
            </NuxtLink>
        </Header>

        <MainContent class="pt-0 pb-0">

            <div class="grid grid-cols-1 gap-6 xl:grid-cols-3 h-full">
                <div class="xl:col-span-2">
                    <NuxtLink to="/course" class="flex gap-1 items-center text-slate-600  py-3.5">
                        <ArrowLeftIcon class="w-5 h-5 text-slate-600" /> Back
                    </NuxtLink>

                    <div class="gap-1.5 flex flex-col mt-2">
                        <div class="text-slate-600 text-sm font-normal leading-tight tracking-tight">
                            IT and Technology
                        </div>
                        <div class="text-slate-900 text-2xl font-bold leading-loose">
                            Professional Web Development
                        </div>
                    </div>

                    <div class="flex flex-col gap-y-8 mt-4">

                        <!-- duration -->
                        <div
                            class="p-3 bg-slate-50 rounded-lg border border-slate-100 justify-start items-center gap-6 flex flex-wrap">
                            <div class="flex flex-col gap-y-2 grow">
                                <div class="text-slate-800 text-xs font-medium leading-none">Course Duration</div>
                                <div class="items-center gap-1.5 flex">
                                    <img src="/icons/clock.svg" class="w-4 h-4" />
                                    <span class="text-slate-600 text-sm font-normal">20h 45m</span>
                                </div>
                            </div>

                            <div class="flex flex-col gap-y-2 grow">
                                <div class="text-slate-800 text-xs font-medium leading-none">Video Lesson</div>
                                <div class="items-center gap-1.5 flex">
                                    <img src="/icons/video.svg" class="w-4 h-4" />
                                    <span class="text-slate-600 text-sm font-normal">123 Video</span>
                                </div>
                            </div>

                            <div class="flex flex-col gap-y-2 grow">
                                <div class="text-slate-800 text-xs font-medium leading-none">Course Instructor</div>
                                <div class="items-center gap-1.5 flex">
                                    <img src="/icons/instructor.svg" class="w-4 h-4" />
                                    <span class="text-slate-600 text-sm font-normal">Jhankar Mahbub</span>
                                </div>
                            </div>

                            <div class="flex flex-col gap-y-2 grow">
                                <div class="text-slate-800 text-xs font-medium leading-none">Course Fee</div>
                                <div class="items-center gap-1.5 flex">
                                    <img src="/icons/balance.svg" class="w-4 h-4" />
                                    <span class="text-slate-600 text-sm font-normal">20,200</span>
                                </div>
                            </div>
                        </div>

                        <!-- Course Description -->
                        <div class="flex flex-col gap-y-2">
                            <div class="text-slate-900 text-sm font-semibold leading-tight">
                                Course Description
                            </div>
                            <p class="text-slate-700 text-sm font-normal leading-tight tracking-tight">
                                Web development is in high demand and a top-five technology job, with an anticipated 30.3% increase in demand for web developers from 2021 to 2031. Keep ahead of the competition by Enrolling in our Comprehensive Web Development Course to learn the latest trends from experienced web developers.
                            </p>
                        </div>

                        <!-- Courses Lesson  List -->
                        <div class="flex flex-col gap-y-2">
                            <div class="text-slate-900 text-sm font-semibold leading-tight">
                                Courses Lesson  List
                            </div>

                            <!-- item -->
                            <div class="flex justify-between items-center gap-2 p-3 bg-white rounded-lg border border-slate-100">
                                <p class="text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                    Lesson01: Introduction to the Course
                                </p>
                                <PlusIcon class="w-6 h-6 text-slate-600"/>
                            </div>

                            <!-- item -->
                            <div class="flex justify-between items-center gap-2 p-3 bg-white rounded-lg border border-slate-100">
                                <p class="text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                    Lesson02: HTML
                                </p>
                                <PlusIcon class="w-6 h-6 text-slate-600"/>
                            </div>

                            <!-- item -->
                            <div class="flex justify-between items-center gap-2 p-3 bg-white rounded-lg border border-slate-100">
                                <p class="text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                    Lesson03: HTML5 and CSS3 Fundamentals
                                </p>
                                <PlusIcon class="w-6 h-6 text-slate-600"/>
                            </div>

                            <!-- item -->
                            <div class="flex justify-between items-center gap-2 p-3 bg-white rounded-lg border border-slate-100">
                                <p class="text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                    Lesson03: CSS and CSS3
                                </p>
                                <PlusIcon class="w-6 h-6 text-slate-600"/>
                            </div>

                            <!-- item -->
                            <div class="flex justify-between items-center gap-2 p-3 bg-white rounded-lg border border-slate-100">
                                <p class="text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                    Lesson04: Javascript
                                </p>
                                <PlusIcon class="w-6 h-6 text-slate-600"/>
                            </div>

                            <!-- item -->
                            <div class="flex justify-between items-center gap-2 p-3 bg-white rounded-lg border border-slate-100">
                                <p class="text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                    Lesson04: jQuery for Beginners
                                </p>
                                <PlusIcon class="w-6 h-6 text-slate-600"/>
                            </div>
                        </div>

                    </div>


                </div>

                <div class="xl:border-s h-full xl:pl-4 xl:pt-12 xl:overflow-y-scroll">
                    <div class="flex pb-4 gap-2 items-center">
                        <div class="text-slate-800 text-xl font-medium leading-7">Enrolled Students</div>
                        <div
                            class="w-6 h-6 bg-cyan-600 rounded-md justify-center items-center flex text-white text-sm font-semibold">
                            32</div>
                    </div>
                    <div class="grid pt-2 pb-6 md:grid-cols-2 xl:grid-cols-1 gap-3">
                        <div v-for="student in students" :key="student.id">
                            <EnrolledStudent :student="student"/>
                        </div>
                    </div>
                </div>
            </div>


        </MainContent>
    </div>
</template>

<script setup>
import { ArrowLeftIcon, PlusIcon } from '@heroicons/vue/24/solid';

useSeoMeta({
    title: 'Course Details',
});

const students = [
    {
        id: 1,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 2,
        name: 'Mohammad Mahfuz test inoe',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 3,
        name: 'Arafat ali 21332',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 4,
        name: 'Sohan vai 1324235345',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 5,
        name: 'Shakil ali shake 23',
        gander: 'Male',
        idCode: '#056976',
        phone: '+125179185884574867978',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 6,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 7,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 8,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 9,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 10,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 15,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 16,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 17,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
];
</script>

<style scoped></style>