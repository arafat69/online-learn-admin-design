<template>
    <div>
        <Header>
            <Breadcumb active="Profile" />

        </Header>
        <MainContent>
            <div
                class="p-6 w-full bg-white bg-opacity-80 rounded-2xl border-slate-100 items-center gap-6 flex-wrap flex bg-[url('/icons/cover.svg')] bg-cover">
                <div class="relative w-24 h-24">
                    <img class="w-full h-full object-cover rounded-full" src="/images/avator.jpeg" />
                    <button
                        class="w-8 h-8 bg-cyan-600 rounded-full flex justify-center items-center absolute right-0 bottom-0">
                        <CameraIcon class="w-6 h-6 text-white" />
                    </button>
                </div>
                <div class="grow flex-col gap-2 flex">
                    <div class="text-gray-900 text-2xl font-bold leading-loose">Luna Maria</div>
                    <div class="text-gray-400 text-base font-normal leading-normal">example@mail.com</div>
                </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-6 mt-6">

                <!-- Personal Infor -->
                <div class="bg-white rounded-xl shadow border border-slate-100 py-4 px-6">
                    <div class="flex gap-2 items-center justify-between mb-4">
                        <div class="text-slate-800 text-sm font-bold leading-tight tracking-tight">
                            Personal Information
                        </div>
                        <button @click="showPersonalInfoModal = true"><img src="/icons/edit.svg" alt=""></button>
                    </div>

                    <div class="grid gap-6 sm:grid-cols-2">
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

                    <!-- address -->
                    <div class="pb-3 mt-8 text-cyan-600 text-xs font-medium">Address Information</div>
                    <div class="mb-5">
                        <div class="text-slate-400 text-sm font-normal">Address</div>
                        <div class="text-slate-800 text-sm font-normal">
                            86737 Steuber Crescent Suite 012 New Mozelle, UT 00442-8898
                        </div>
                    </div>
                    <div class="grid gap-6 sm:grid-cols-2">
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

                <!-- Business Infor -->
                <div class="bg-white rounded-xl shadow border border-slate-100 py-4 px-6 flex flex-col justify-between">
                    <div>
                        <div class="flex gap-2 items-center justify-between mb-4">
                            <div class="text-slate-800 text-sm font-bold leading-tight tracking-tight">
                                Business Information
                            </div>
                            <button @click="showBusinessInfoModal = true">
                                <img src="/icons/edit.svg" alt="">
                            </button>
                        </div>

                        <div class="grid gap-6 sm:grid-cols-2">
                            <div>
                                <div class="text-slate-400 text-sm font-normal">Company Name</div>
                                <div class="text-slate-800 text-sm font-normal">Lubowitz, Purdy and Hansen</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Company Type</div>
                                <div class="text-slate-800 text-sm font-normal">Individual firm</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Vat ID</div>
                                <div class="text-slate-800 text-sm font-normal">29312177</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Business Phone</div>
                                <div class="text-slate-800 text-sm font-normal">+17864160963</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Business Mobile Phone</div>
                                <div class="text-slate-800 text-sm font-normal">+13084563276</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Business Email</div>
                                <div class="text-slate-800 text-sm font-normal">mkoepp@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <!-- address -->
                        <div class="pb-3 text-cyan-600 text-xs font-medium">Address Information</div>
                        <div class="mb-5">
                            <div class="text-slate-400 text-sm font-normal">Address</div>
                            <div class="text-slate-800 text-sm font-normal">
                                86737 Steuber Crescent Suite 012 New Mozelle, UT 00442-8898
                            </div>
                        </div>
                        <div class="grid gap-6 sm:grid-cols-2">
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

        <ClientOnly>
            <TransitionRoot as="template" :show="showPersonalInfoModal">
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
                                    class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 md:max-w-2xl">
                                    <div class="bg-white p-4 sm:p-6 md:min-h-[720px]">
                                        <div class="">
                                            <div class="text-slate-800 text-2xl font-semibold leading-loose">
                                                Edit Personal Information
                                            </div>
                                            <XCircleIcon
                                                class="w-8 h-8 text-slate-500 absolute top-3 right-3 cursor-pointer"
                                                @click="showPersonalInfoModal = false" />
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
                                            @click="showPersonalInfoModal = false">
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

        <ClientOnly>
            <TransitionRoot as="template" :show="showBusinessInfoModal">
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
                                    class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 md:max-w-2xl">
                                    <div class="bg-white p-4 sm:p-6 md:min-h-[720px]">
                                        <div class="">
                                            <div class="text-slate-800 text-2xl font-semibold leading-loose">
                                                Edit Business Information
                                            </div>
                                            <XCircleIcon
                                                class="w-8 h-8 text-slate-500 absolute top-3 right-3 cursor-pointer"
                                                @click="showBusinessInfoModal = false" />
                                        </div>

                                        <div
                                            class="h-11 border-b border-slate-200 justify-start items-center gap-8 inline-flex w-full mb-3">
                                            <div class="py-3 border-b justify-start items-center gap-3 flex cursor-pointer"
                                                :class="personalInfo ? 'border-cyan-600' : 'border-transparent'"
                                                @click="showTabMenu('personalInfo')">
                                                <div class="text-cyan-600 text-sm font-normal leading-tight tracking-tight">
                                                    Business Information
                                                </div>
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
                                            <Input placeholder="Company Name" required label="Company Name" />
                                            <div class="grid md:grid-cols-2 md:gap-4">
                                                <div>
                                                    <Label title="Company Type" required />
                                                    <Select2 v-model="form.gender" :options="gender"
                                                        placeholder="Select Company Type" required />
                                                </div>

                                                <Input label="Vat ID" placeholder="Vat ID" required />


                                                <Input label="Business Phone" placeholder="Enter Business Phone	" />

                                                <Input type="text" label="Business Mobile Phone" placeholder="Business Mobile Phone" required />

                                                <Input type="email" label="Business Email" placeholder="Enter Business Email" required />
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
                                            @click="showBusinessInfoModal = false">
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
import { CameraIcon, XCircleIcon } from "@heroicons/vue/20/solid";
import { ref } from 'vue';

useSeoMeta({
    title: 'Profile',
});

const showPersonalInfoModal = ref(false)

const showBusinessInfoModal = ref(false)

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

</script>

<style scoped></style>