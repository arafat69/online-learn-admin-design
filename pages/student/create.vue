<template>
    <div>
        <Header>
            <Breadcumb item="Students" item-link="/student" active="New Student" />
        </Header>

        <MainContent>
            <div class="grid grid-cols-1 gap-x-0 gap-y-6  xl:grid-cols-5 h-full xl:gap-x-6">
                <div class="col-span-3">
                    <div class="bg-white">
                        <div class="">
                            <div class="text-slate-800 text-2xl font-semibold leading-loose">
                                New Students
                            </div>
                        </div>

                        <div class="p-4 border-b border-slate-200 justify-start items-center gap-3 inline-flex w-full mb-3">
                            <div class="justify-start items-center gap-3 flex">
                                <CheckCircleIcon v-if="personalInfoStep" class="w-6 h-6 text-cyan-600" />
                                <div v-else
                                    class="w-6 h-6 p-2 rounded-[48px] border border-cyan-600 justify-center items-center gap-2 inline-flex">
                                    <div class="text-cyan-600 text-xs font-medium leading-none">1</div>
                                </div>
                                <div class="text-cyan-600 text-sm font-normal leading-tight tracking-tight">
                                    Personal Information
                                </div>
                            </div>

                            <div class="w-[68px] h-[0px] border border-slate-300"></div>

                            <div class="py-3 justify-start items-center gap-3 flex">
                                <div class="w-6 h-6 p-2 rounded-[48px] border justify-center items-center gap-2 inline-flex"
                                    :class="addressInfo ? 'border-cyan-600' : 'border-slate-200'">
                                    <div class="text-xs font-medium leading-none"
                                        :class="addressInfo ? 'text-cyan-600' : 'text-slate-600'">2</div>
                                </div>
                                <div class="text-slate-500 text-sm font-normal leading-tight tracking-tight">
                                    Address Information</div>
                            </div>
                        </div>

                        <!-- Personal Information -->
                        <div v-if="personalInfo">
                            <Input placeholder="Fiscal Code (CF)" required label="Fiscal Code (CF)" />
                            <div class="grid md:grid-cols-2 md:gap-x-6 md:gap-y-4">
                                <Input label="Name" placeholder="Type Name" required />

                                <Input label="Surname" placeholder="Type surname" required />

                                <div class="">
                                    <Label title="Gender" required />
                                    <Select2 v-model="form.gender" :options="gender" placeholder="Select Gender" required
                                        settings="width: '100%'" />
                                </div>

                                <Input type="date" label="Date of Birth" required />

                                <div>
                                    <Label title="Province of Birth" required />
                                    <Select2 :options="gender" placeholder="Select Province of Birth" />
                                </div>

                                <div>
                                    <Label title="City of Birth" required />
                                    <Select2 :options="gender" placeholder="Select City of Birth" required />
                                </div>

                                <div>
                                    <Label title="Citizenship" required />
                                    <Select2 :options="gender" placeholder="Select Citizenship" />
                                </div>


                                <Input label="Telephone Number" placeholder="Enter Telephone Number" />

                                <Input type="text" label="Mobile Number" placeholder="Enter Mobile Number" required />

                                <Input type="email" label="Email" placeholder="Enter Email" required />
                            </div>
                            <div class="w-full h-14 p-4 bg-cyan-600 rounded-[10px] justify-center items-center gap-2 inline-flex mt-3 cursor-pointer"
                                @click="personalInfoDone()">
                                <div class="text-white text-base font-medium leading-normal">Proceed Next</div>
                                <ArrowRightIcon class="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <!-- Address Information -->
                        <div v-else>
                            <div class="grid md:grid-cols-3 md:gap-6">
                                <Input type="text" label="Residence Address" placeholder="Enter Residence Address" required
                                    class="col-span-2" />

                                <Input type="text" label="Civic No" placeholder="Enter Civic No" required />
                            </div>

                            <div class="mb-4">
                                <Label title="Province of Residence" required />
                                <Select2 :options="gender" placeholder="Select Province of Residence" />
                            </div>

                            <div class="grid md:grid-cols-2 gap-4">
                                <div>
                                    <Label title="City of Residence" required />
                                    <Select2 :options="gender" placeholder="Select City of Residence" required />
                                </div>
                                <Input type="text" label="Postal Code" placeholder="Enter Postal Code" required />
                            </div>
                            <div class="w-full h-14 p-4 bg-cyan-600 rounded-[10px] justify-center items-center gap-2 inline-flex mt-3 cursor-pointer"
                                @click="submitForm()">
                                <div class="text-white text-base font-medium leading-normal">Save</div>
                            </div>
                        </div>

                    </div>
                </div>


                <!-- Preview section -->
                <div class="h-full w-full col-span-2 bg-slate-50 rounded-xl">
                    <div
                        class="w-full rounded-tl-xl rounded-tr-xl px-6 py-4 bg-slate-600 justify-start items-center gap-2 inline-flex">
                        <div class="grow shrink basis-0 text-white text-base font-bold leading-normal">Preview</div>
                    </div>
                    <div class="px-6 py-2">
                        <div class="py-3 text-cyan-600 text-xs font-medium leading-none">Personal Information</div>
                        <div class="grid gap-5 sm:grid-cols-2">
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
                        <div class="py-3 text-cyan-600 text-xs font-medium mt-3">Address Information</div>
                        <div class="mb-5">
                            <div class="text-slate-400 text-sm font-normal">Address</div>
                            <div class="text-slate-800 text-sm font-normal">
                                86737 Steuber Crescent Suite 012 New Mozelle, UT 00442-8898
                            </div>
                        </div>
                        <div class="grid gap-5 sm:grid-cols-2">
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
            </div>
        </MainContent>
    </div>
    <ClientOnly>
        <TransitionRoot as="template" :show="successModal">
            <Dialog as="div" class="relative z-10" @close="open = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                    leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
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
                                class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-[492px]">
                                <div
                                    class="px-6 pt-12 pb-8 bg-green-500 justify-center items-center gap-2 flex flex-col relative">
                                    <CircleIconOutline class="w-[88px] h-[88px] text-white" />
                                    <div
                                        class="text-center text-white text-base font-medium leading-normal tracking-[3.20px]">
                                        SUCCESS</div>
                                    <XCircleIcon class="w-8 h-8 text-slate-100 absolute top-3 right-3 cursor-pointer"
                                        @click="successModal = false" />
                                </div>
                                <div class="p-6 bg-white justify-start items-center gap-2 inline-flex">
                                    <div class="text-center text-slate-800 text-2xl font-normal leading-loose">You have
                                        successfully created student profile.</div>
                                </div>

                                <div
                                    class="p-6 bg-white border-t border-slate-200 justify-center items-center gap-4 inline-flex w-full text-center">
                                        <NuxtLink to="/student" class="grow p-4 rounded-[10px] border border-cyan-600 text-cyan-600 text-base font-medium leading-normal">
                                            Back to List
                                        </NuxtLink>
                                        <NuxtLink to="/admission" class="text-white text-base font-medium leading-normal grow p-4 bg-cyan-600 rounded-[10px]">
                                            Enroll to Course
                                        </NuxtLink>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </ClientOnly>
</template>

<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { CheckCircleIcon as CircleIconOutline } from '@heroicons/vue/24/outline';
import { ArrowRightIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

useSeoMeta({
    title: 'Student Create',
});

const successModal = ref(false)

const personalInfo = ref(true)
const personalInfoStep = ref(false)
const addressInfo = ref(false)

const form = {
    gender: '',
}

const gender = [
    'Male',
    'Female',
    'Others'
]

const personalInfoDone = () => {

    addressInfo.value = true;
    personalInfo.value = false;
    personalInfoStep.value = true;
}

const submitForm = ()=>{
    successModal.value = true
}

const setting = {
    width: '100%'
}
</script>

<style scoped></style>