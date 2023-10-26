<template>
    <div>
        <Header>
            <Breadcumb item="Students" item-link="/student" active="Details" />
            <NuxtLink to="/admission" class="btn-primary">
                <img src="/icons/new_admission.svg" alt="">
                New Admission
            </NuxtLink>
        </Header>

        <MainContent class="pt-0 pb-0">

            <div class="grid grid-cols-1 gap-6 xl:grid-cols-3 h-full">
                <div class="xl:col-span-2">
                    <NuxtLink to="/student" class="flex gap-1 items-center text-slate-600  py-3.5">
                        <ArrowLeftIcon class="w-5 h-5 text-slate-600" /> Back
                    </NuxtLink>

                    <div class="bg-white bg-opacity-50 rounded-xl relative h-[80px] sm:h-[130px] md:h-auto -z-0">
                        <img src="/icons/student-cover.png" class="w-full h-full -z-0">
                        <div class="text-right text-green-400 text-xs font-normal absolute top-4 right-4">
                            Profile Created:<br />
                            23 Jan, 2023
                        </div>
                    </div>
                    <div class="w-full -mt-12 justify-start items-end gap-2 flex flex-wrap pl-6">
                        <img class="w-24 h-24 rounded-full border-2 border-white z-10" src="/icons/GenderMale.png" />
                        <div class="grow flex-col gap-0.5 inline-flex">
                            <div class="justify-start items-center gap-1.5 inline-flex flex-wrap">
                                <div class="text-slate-800 text-base font-medium leading-normal">Mohammad Mahfuz</div>
                                <div class="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                                <div class="text-blue-500 text-xs font-normal leading-none">#56898</div>
                            </div>
                            <div class="text-slate-400 text-xs font-normal leading-none">m.mahfuz@gmail.com</div>
                        </div>
                        <button @click="showModal = true"
                            class="px-2 py-1.5 rounded-md border border-blue-400 text-blue-400 text-xs font-normal leading-none">
                            Edit Profile
                        </button>
                    </div>

                    <div class="px-6 pt-2 pb-6 bg-slate-50 rounded-xl border border-slate-100 mt-8">
                        <div class="py-3 text-cyan-600 text-xs font-medium leading-none">Personal Information</div>
                        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <div class="text-slate-400 text-sm font-normal">Fiscal Code (CF)</div>
                                <div class="text-slate-800 text-sm font-normal">HWLPSH90E31Z249J</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Gender</div>
                                <div class="text-slate-800 text-sm font-normal">Male</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Date of Birth</div>
                                <div class="text-slate-800 text-sm font-normal">12/03/1998</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Province of Birth</div>
                                <div class="text-slate-800 text-sm font-normal">Modena</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">City of Birth</div>
                                <div class="text-slate-800 text-sm font-normal">Sestola</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Citizenship</div>
                                <div class="text-slate-800 text-sm font-normal">Gibuti</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Telephone Number</div>
                                <div class="text-slate-800 text-sm font-normal">+16032435496</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Mobile Number</div>
                                <div class="text-slate-800 text-sm font-normal">+16032435496</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Email</div>
                                <div class="text-slate-800 text-sm font-normal">hannan@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    <div class="px-6 pt-2 pb-6 bg-slate-50 rounded-xl border border-slate-100 mt-4">
                        <div class="py-3 text-cyan-600 text-xs font-medium leading-none">Address Information</div>
                        <div class="mb-5">
                            <div class="text-slate-400 text-sm font-normal">Address</div>
                            <div class="text-slate-800 text-sm font-normal">86737 Steuber Crescent Suite 012 New Mozelle, UT
                                00442-8898</div>
                        </div>
                        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <div class="text-slate-400 text-sm font-normal">Province of Residence</div>
                                <div class="text-slate-800 text-sm font-normal">Asti</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">City of Residence</div>
                                <div class="text-slate-800 text-sm font-normal">Portacomaro</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Postal Code</div>
                                <div class="text-slate-800 text-sm font-normal">82458-2430</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="xl:border-s h-full xl:pl-4 xl:pt-12">
                    <div class="flex pb-4 gap-2 items-center">
                        <div class="text-slate-800 text-xl font-medium leading-7">Course Enrolled</div>
                        <div
                            class="w-6 h-6 bg-cyan-600 rounded-md justify-center items-center flex text-white text-sm font-semibold">
                            3</div>
                    </div>
                    <div class="grid pt-2 pb-6 md:grid-cols-2 xl:grid-cols-1 gap-3">
                        <div v-for="course in cources" :key="course.id">
                            <CourseCard :course="course" class="hover:border-teal-300" />
                        </div>
                    </div>
                </div>
            </div>


        </MainContent>

        <ClientOnly>
            <TransitionRoot as="template" :show="showModal">
                <Dialog as="div" class="relative z-10" @close="open = false">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                        enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild as="template" enter="ease-out duration-300"
                                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                                leave-from="opacity-100 translate-y-0 sm:scale-100"
                                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <DialogPanel
                                    class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-2xl">
                                    <div class="bg-white p-4 sm:p-6 md:min-h-[720px]">
                                        <div class="">
                                            <div class="text-slate-800 text-2xl font-semibold leading-loose">Edit student
                                                info
                                            </div>
                                            <XCircleIcon
                                                class="w-8 h-8 text-slate-500 absolute top-3 right-3 cursor-pointer"
                                                @click="showModal = false" />
                                        </div>

                                        <div
                                            class="h-11 border-b border-slate-200 justify-start items-center gap-8 inline-flex w-full mb-3">
                                            <div class="py-3 border-b justify-start items-center gap-3 flex cursor-pointer"
                                                :class="personalInfo ? 'border-cyan-600' : 'border-transparent'"
                                                @click="showTabMenu('personalInfo')">
                                                <div class="text-cyan-600 text-sm font-normal leading-tight tracking-tight">
                                                    Personal Information</div>
                                            </div>
                                            <div class="py-3 border-b justify-start items-center gap-3 flex cursor-pointer"
                                                :class="addressInfo ? 'border-cyan-600' : 'border-transparent'"
                                                @click="showTabMenu('addressInfo')">
                                                <div
                                                    class="text-slate-500 text-sm font-normal leading-tight tracking-tight">
                                                    Address Information</div>
                                            </div>
                                        </div>

                                        <div v-if="personalInfo">
                                            <Input placeholder="Fiscal Code (CF)" required label="Fiscal Code (CF)" />
                                            <div class="grid md:grid-cols-2 md:gap-4">
                                                <Input label="Name" placeholder="Type Name" required />

                                                <Input label="Surname" placeholder="Type surname" required />

                                                <div>
                                                    <Label title="Gender" required />
                                                    <Select2 v-model="form.gender" :options="gender"
                                                        placeholder="Select Gender" required />
                                                </div>

                                                <Input type="date" label="Date of Birth" required />

                                                <div>
                                                    <Label title="Province of Birth" required />
                                                    <Select2 :options="gender" placeholder="Select Province of Birth" />
                                                </div>

                                                <div>
                                                    <Label title="City of Birth" required />
                                                    <Select2 :options="gender" placeholder="Select City of Birth"
                                                        required />
                                                </div>

                                                <div>
                                                    <Label title="Citizenship" required />
                                                    <Select2 :options="gender" placeholder="Select Citizenship" />
                                                </div>


                                                <Input label="Telephone Number" placeholder="Enter Telephone Number" />

                                                <Input type="text" label="Mobile Number" placeholder="Enter Mobile Number"
                                                    required />

                                                <Input type="email" label="Email" placeholder="Enter Email" required />
                                            </div>
                                        </div>

                                        <div v-else>
                                            <div class="grid md:grid-cols-3 md:gap-4">
                                                <Input type="text" label="Residence Address"
                                                    placeholder="Enter Residence Address" required class="col-span-2" />

                                                <Input type="text" label="Civic No" placeholder="Enter Civic No" required />
                                            </div>

                                            <div class="mb-4">
                                                <Label title="Province of Residence" required />
                                                <Select2 :options="gender" placeholder="Select Province of Residence" />
                                            </div>

                                            <div class="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <Label title="City of Residence" required />
                                                    <Select2 :options="gender" placeholder="Select City of Residence"
                                                        required />
                                                </div>
                                                <Input type="text" label="Postal Code" placeholder="Enter Postal Code"
                                                    required />
                                            </div>
                                        </div>

                                    </div>
                                    <div
                                        class="p-6 bg-white border-t border-slate-200 justify-center items-center gap-4 flex flex-wrap w-full">
                                        <button
                                            class="grow shrink basis-0 h-14 p-4 rounded-[10px] border border-cyan-600 text-cyan-600 text-base font-medium"
                                            @click="showModal = false">
                                            Cancel
                                        </button>
                                        <button
                                            class="grow shrink basis-0 h-14 p-4 bg-cyan-600 rounded-[10px] text-white text-base font-medium">Update</button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </ClientOnly>
    </div>
</template>

<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ArrowLeftIcon, XCircleIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

useSeoMeta({
    title: 'Students',
});

const showModal = ref(false)

const personalInfo = ref(true)
const addressInfo = ref(false)

const form = {
    gender: '',
}

const gender = [
    'Male',
    'Female',
    'Others'
]

const showTabMenu = (item) => {
    item == 'personalInfo' ? personalInfo.value = true : personalInfo.value = false;
    item == 'addressInfo' ? addressInfo.value = true : addressInfo.value = false;
}

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
];

</script>

<style scoped></style>