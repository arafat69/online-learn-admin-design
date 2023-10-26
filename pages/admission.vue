<template>
    <div>
        <Header>
            <Breadcumb item="Students" item-link="/student" active="New Admission" />
        </Header>

        <MainContent class="pt-0 pb-0">

            <div class="grid grid-cols-1 gap-6 xl:grid-cols-3 h-full">
                <div class="xl:col-span-2 pt-4 flex flex-col gap-y-6">
                    <div class="text-slate-800 text-2xl font-semibold leading-loose">New Admission</div>
                    <div>
                        <div class="text-slate-800 text-base font-medium leading-normal">Course</div>
                        <CustomSelectBox />
                    </div>

                    <!-- Students -->
                    <div class="justify-between items-center gap-3 flex">
                        <div class="text-slate-800 text-base font-medium leading-normal">Students</div>
                        <button
                            class="pl-2 pr-3 py-1.5 rounded-[10px] border border-slate-200 justify-center items-center gap-1 flex"
                            @click="showModal = true">
                            <PlusIcon class="w-6 h-6 text-slate-800" />
                            <span class="text-slate-800 text-sm font-semibold leading-tight">New</span>
                        </button>
                    </div>

                    <!-- Add Students -->
                    <div
                        class="p-4 bg-white rounded-xl border border-slate-200 flex-col justify-center items-center gap-2 flex">
                        <div
                            class="w-full py-6 bg-red-50 rounded-lg text-center text-red-500 text-sm font-normal leading-tight tracking-tight">
                            No students selected
                        </div>

                        <div
                            class="flex w-full justify-between items-center flex-wrap bg-slate-50 px-4 py-3 rounded-lg border border-slate-100 gap-3">
                            <div class="flex items-center gap-2 flex-grow w-full sm:w-60">
                                <img src="/icons/GenderMale.png" class="w-10 h-10" alt="">
                                <div>
                                    <div class="text-slate-800 text-sm font-normal">Mohammad Mahfuz</div>
                                    <div class="inline-flex items-center gap-2">
                                        <div class="text-slate-500 text-xs font-normal">Male</div>
                                        <div class="w-1 h-1 bg-slate-300 rounded-full"></div>
                                        <div class="text-slate-500 text-xs font-normal">#56898</div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-slate-800 text-xs font-normal w-36 flex-grow">+12517918588</div>
                            <div class="text-slate-800 text-xs font-normal w-36 flex-grow">VAxzaRmYbIPcUY8L</div>
                            <div class="flex justify-between w-38 gap-5 flex-grow xl:flex-grow-0">
                                <button class="text-right text-blue-500 text-xs font-normal">
                                   <img src="/icons/trash.svg" alt="">
                                </button>
                            </div>
                        </div>
                        <div
                            class="flex w-full justify-between items-center flex-wrap bg-slate-50 px-4 py-3 rounded-lg border border-slate-100 gap-3">
                            <div class="flex items-center gap-2 flex-grow w-full sm:w-60">
                                <img src="/icons/GenderMale.png" class="w-10 h-10" alt="">
                                <div>
                                    <div class="text-slate-800 text-sm font-normal">Mohammad Mahfuz</div>
                                    <div class="inline-flex items-center gap-2">
                                        <div class="text-slate-500 text-xs font-normal">Male</div>
                                        <div class="w-1 h-1 bg-slate-300 rounded-full"></div>
                                        <div class="text-slate-500 text-xs font-normal">#56898</div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-slate-800 text-xs font-normal w-36 flex-grow">+12517918588</div>
                            <div class="text-slate-800 text-xs font-normal w-36 flex-grow">VAxzaRmYbIPcUY8L</div>
                            <div class="flex justify-between w-38 gap-5 flex-grow xl:flex-grow-0">
                                <button class="text-right text-blue-500 text-xs font-normal" @click="destroyStudent">
                                   <img src="/icons/trash.svg" alt="">
                                </button>
                            </div>
                        </div>

                        <button class="self-stretch p-2 justify-center items-center gap-3 inline-flex"
                            @click="studentModalShow = true">
                            <LinkIcon class="w-6 h-6 text-blue-500" />
                            <div class="text-blue-500 text-sm font-normal leading-tight tracking-tight">Add Students</div>
                        </button>
                    </div>

                </div>

                <!-- rightBar section -->
                <div class="xl:border-s h-full xl:pl-4 pt-6 xl:border-l xl:border-slate-100 flex flex-col gap-8">

                    <!-- Order Summary -->
                    <div>
                        <h3 class="text-slate-800 text-xl font-medium leading-7 mb-3">Order Summary</h3>
                        <div class="w-full p-4 bg-slate-100 rounded-xl">
                            <div class="border-b border-slate-200 flex-col gap-1 flex">
                                <div class="py-2 justify-between items-center gap-6 flex">
                                    <div class="text-slate-600 text-sm font-normal leading-tight tracking-tight">
                                        Course Fees
                                    </div>
                                    <div class="text-right text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                        € 200
                                    </div>
                                </div>
                                <div class="py-2 justify-between items-center gap-6 flex">
                                    <div class="text-slate-600 text-sm font-normal leading-tight tracking-tight">
                                        Students (Qty)
                                    </div>
                                    <div class="text-right text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                        0
                                    </div>
                                </div>
                            </div>
                            <div class="border-b border-slate-200 flex-col gap-1 flex">
                                <div class="py-2 justify-between items-center gap-6 flex">
                                    <div class="text-slate-600 text-sm font-normal leading-tight tracking-tight">
                                        Subtotal
                                    </div>
                                    <div class="text-right text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                        € 200
                                    </div>
                                </div>
                                <div class="py-2 justify-between items-center gap-6 flex">
                                    <div class="text-slate-600 text-sm font-normal leading-tight tracking-tight">
                                        VAT (5%)
                                    </div>
                                    <div class="text-right text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                        € 20
                                    </div>
                                </div>
                            </div>

                            <div class="h-9 py-2 justify-between items-center gap-6 flex">
                                <div class="text-slate-600 text-sm font-semibold leading-tight">Net Total</div>
                                <div class="text-right text-slate-800 text-sm font-semibold leading-tight">€ 210</div>
                            </div>
                        </div>
                    </div>

                    <!-- Coupon -->
                    <div>
                        <div class="text-slate-800 text-base font-medium leading-normal">Coupon</div>
                        <div class="flex justify-between items-center gap-2 mt-3">
                            <div class="relative flex-grow">
                                <input
                                    class="placeholder:text-slate-400 text-sm font-normal leading-tight tracking-tight p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none pl-10 w-full h-12"
                                    placeholder="Enter Coupon Code" />
                                <img src="/icons/tag.svg" class="w-6 h-6 absolute top-2/4 left-2 -translate-y-2/4">
                            </div>
                            <button
                                class="w-[84px] h-12 p-3 rounded-[10px] border border-cyan-600 text-cyan-600 text-base font-medium leading-normal">Apply</button>
                        </div>
                    </div>

                    <!-- Payment Method-->
                    <div>
                        <div class="text-slate-800 text-base font-medium leading-normal mb-3">Payment Method</div>
                        <div class="items-center gap-4 flex">
                            <div class="grow">
                                <input id="bank" name="payment" type="radio" class="sr-only peer/bank">
                                <label for="bank"
                                    class="cursor-pointer peer-checked/bank:border-cyan-600 peer-checked/bank:bg-teal-50 p-4 bg-white rounded-xl border border-slate-200 flex-col justify-start items-start gap-3 inline-flex w-full">
                                    <div class="h-[52px] flex-col justify-start items-start gap-2 flex">
                                        <div class="w-5 h-5 bg-white rounded-full border border-slate-200">
                                        </div>
                                        <div class="text-slate-800 text-sm font-semibold leading-tight">Bank Pay
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div class="grow">
                                <input id="online" name="payment" type="radio" class="sr-only peer/online">
                                <label for="online"
                                    class="cursor-pointer p-4 bg-white peer-checked/online:border-cyan-600 peer-checked/online:bg-teal-50 rounded-xl border border-slate-200 flex-col justify-start items-start gap-3 inline-flex w-full">
                                    <div class="h-[52px] flex-col justify-start items-start gap-2 flex">
                                        <div class="w-5 h-5 bg-white rounded-full border border-slate-200"></div>
                                        <div class="text-slate-800 text-sm font-semibold leading-tight">Online Pay
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- pay button -->
                    <button class="h-14 p-4 bg-slate-200 rounded-[10px] text-white text-base font-medium leading-normal"
                        disabled>
                        Pay Online
                    </button>
                </div>
            </div>


        </MainContent>

        <!-- New Student add modal -->
        <TransitionRoot as="template" :show="showModal">
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
                                class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 md:w-[668px]">
                                <div class="bg-white p-4 sm:p-6 md:min-h-[720px]">
                                    <div class="">
                                        <div class="text-slate-800 sm:text-2xl font-semibold leading-loose">
                                            Add New Student
                                        </div>
                                        <XCircleIcon class="w-8 h-8 text-slate-500 absolute top-3 right-3 cursor-pointer"
                                            @click="showModal = false" />
                                    </div>

                                    <div
                                        class="py-4 border-b border-slate-200 justify-start items-center gap-3 flex flex-wrap w-full mb-3">
                                        <div class="justify-start items-center gap-3 flex">
                                            <CheckCircleIcon v-if="personalInfoStep" class="w-6 h-6 text-cyan-600" />
                                            <div v-else
                                                class="w-6 h-6 p-2 rounded-[48px] border border-cyan-600 justify-center items-center gap-2 inline-flex">
                                                <div class="text-cyan-600 text-xs font-medium leading-none">1</div>
                                            </div>
                                            <div class="text-sm font-normal leading-tight tracking-tight"
                                                :class="personalInfo ? 'text-cyan-600' : ''">
                                                Personal Info
                                            </div>
                                        </div>

                                        <div class="w-[68px] h-[0px] border border-slate-300"></div>

                                        <div class="py-3 justify-start items-center gap-3 flex">
                                            <CheckCircleIcon v-if="addressInfoStep" class="w-6 h-6 text-cyan-600" />
                                            <div v-else
                                                class="w-6 h-6 p-2 rounded-[48px] border justify-center items-center gap-2 inline-flex"
                                                :class="addressInfo ? 'border-cyan-600' : ''">
                                                <div class="text-xs font-medium leading-none"
                                                    :class="addressInfo ? 'text-cyan-600' : 'text-slate-600'">2</div>
                                            </div>
                                            <div class="text-sm font-normal leading-tight tracking-tight"
                                                :class="addressInfo ? 'text-cyan-600' : 'text-slate-500'">
                                                Address Info
                                            </div>
                                        </div>

                                        <div class="w-[68px] h-[0px] border border-slate-300"></div>

                                        <div class="py-3 justify-start items-center gap-3 flex">
                                            <div class="w-6 h-6 p-2 rounded-[48px] border justify-center items-center gap-2 inline-flex"
                                                :class="review ? 'border-cyan-600' : ''">
                                                <div class="text-xs font-medium leading-none"
                                                    :class="review ? 'text-cyan-600' : 'text-slate-600'">3</div>
                                            </div>
                                            <div class="text-sm font-normal leading-tight tracking-tight"
                                                :class="review ? 'text-cyan-600' : 'text-slate-500'">
                                                Review
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="personalInfo">
                                        <Input placeholder="Fiscal Code (CF)" required label="Fiscal Code (CF)" />
                                        <div class="grid md:grid-cols-2 md:gap-4">
                                            <Input label="Name" placeholder="Type Name" required />

                                            <Input label="Surname" placeholder="Type surname" required />

                                            <div>
                                                <Label title="Gender" required />
                                                <Select2 v-model="form.gender" :options="gender" placeholder="Select Gender"
                                                    required />
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

                                            <Input type="text" label="Mobile Number" placeholder="Enter Mobile Number"
                                                required />

                                            <Input type="email" label="Email" placeholder="Enter Email" required />
                                        </div>
                                    </div>

                                    <div v-if="addressInfo">
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

                                    <div v-if="review" class="">
                                        <div class="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                            <div class="py-3 text-cyan-600 text-xs font-medium leading-none">Personal
                                                Information</div>
                                            <div class="grid gap-4 sm:grid-cols-3">
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
                                        <div class="p-3 bg-slate-50 rounded-lg border border-slate-100 mt-4">

                                            <div class="py-3 text-cyan-600 text-xs font-medium mt-3">Address Information
                                            </div>
                                            <div class="mb-4">
                                                <div class="text-slate-400 text-sm font-normal">Address</div>
                                                <div class="text-slate-800 text-sm font-normal">
                                                    86737 Steuber Crescent Suite 012 New Mozelle, UT 00442-8898
                                                </div>
                                            </div>
                                            <div class="grid gap-4 sm:grid-cols-3">
                                                <div>
                                                    <div class="text-slate-400 text-sm font-normal">Province of Residence
                                                    </div>
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

                                <!-- footer button -->
                                <div class="p-6 bg-white border-t border-slate-200">
                                    <div v-if="personalInfo"
                                        class="justify-center items-center gap-4 flex flex-wrap w-full">
                                        <button
                                            class="grow shrink basis-0 h-14 p-4 rounded-[10px] border border-cyan-600 text-cyan-600 text-base font-medium"
                                            @click="showModal = false">
                                            Cancel
                                        </button>
                                        <button
                                            class="grow h-14 p-4 bg-cyan-600 rounded-[10px] text-white text-base font-medium flex justify-center items-center gap-2"
                                            @click="showTabMenu('addressInfo')">
                                            Next
                                            <ArrowRightIcon class="w-6 h-6 text-white" />
                                        </button>
                                    </div>

                                    <div v-if="addressInfo" class="justify-center items-center gap-4 flex flex-wrap w-full">
                                        <button
                                            class="grow shrink basis-0 h-14 p-4 rounded-[10px] border border-cyan-600 text-cyan-600 text-base font-medium"
                                            @click="showTabMenu('personalInfo')">
                                            Previous
                                        </button>
                                        <button
                                            class="grow h-14 p-4 bg-cyan-600 rounded-[10px] text-white text-base font-medium flex justify-center items-center gap-2"
                                            @click="showTabMenu('review')">
                                            Next
                                            <ArrowRightIcon class="w-6 h-6 text-white" />
                                        </button>
                                    </div>

                                    <div v-if="review" class="justify-center items-center gap-4 flex flex-wrap w-full">
                                        <button
                                            class="grow shrink basis-0 h-14 p-4 rounded-[10px] border border-cyan-600 text-cyan-600 text-base font-medium"
                                            @click="showTabMenu('addressInfo')">
                                            Previous
                                        </button>
                                        <button
                                            class="grow h-14 p-4 bg-cyan-600 rounded-[10px] text-white text-base font-medium"
                                            @click="submitForm">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <!-- New Student add modal -->


        <!-- <ClientOnly> -->
        <TransitionRoot as="template" :show="studentModalShow">
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
                                class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-3xl md:w-[760px]">
                                <div class="bg-white p-4 sm:p-6 md:min-h-[720px]">
                                    <div class="">
                                        <div class="text-slate-800 sm:text-2xl font-semibold leading-loose">
                                            Add Students to the Course (3)
                                        </div>
                                        <XCircleIcon class="w-8 h-8 text-slate-500 absolute top-3 right-3 cursor-pointer"
                                            @click="studentModalShow = false" />
                                    </div>

                                    <InputSearch placeholder="Search Student by ID, Fiscal Code or Phone Number" class="mt-2 mb-4"/>

                                    <div class="flex flex-col gap-y-2 max-h-[576px] overflow-y-scroll">
                                        <div v-for="student in students" :key="student.id">
                                            <AddStudentCard :student="student" />
                                        </div>
                                    </div>

                                </div>

                                <!-- footer button -->
                                <div class="p-6 bg-white border-t border-slate-200">
                                    <div class="justify-center items-center gap-4 flex flex-wrap w-full">
                                        <button
                                            class="grow shrink basis-0 h-14 p-4 rounded-[10px] border border-cyan-600 text-cyan-600 text-base font-medium"
                                            @click="studentModalShow = false">
                                            Cancel
                                        </button>
                                        <button
                                            class="grow h-14 p-4 bg-cyan-600 rounded-[10px] text-white text-base font-medium flex justify-center items-center gap-2" @click="addStudent">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <!-- </ClientOnly> -->

    </div>
</template>

<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ArrowRightIcon, CheckCircleIcon, LinkIcon, PlusIcon, XCircleIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const Toast = useToast()

useSeoMeta({
    title: 'Students',
});

const showModal = ref(false)
const studentModalShow = ref(false)

const personalInfo = ref(true)
const personalInfoStep = ref(false)
const addressInfo = ref(false)
const addressInfoStep = ref(false)
const review = ref(false)

const form = {
    gender: '',
}

const gender = [
    'Male',
    'Female',
    'Others'
]

const addStudent = ()=>{
    studentModalShow.value = false;
    Toast.success('Student Added Success');
};

const destroyStudent = ()=>{
    Toast.error('Student Deleted');
};

const showTabMenu = (item) => {
    if (item == 'personalInfo') {
        personalInfo.value = true
        personalInfoStep.value = false

        addressInfo.value = false
        addressInfoStep.value = false

        review.value = false
    }

    if (item == 'addressInfo') {
        personalInfo.value = false
        personalInfoStep.value = true

        addressInfo.value = true
        addressInfoStep.value = false

        review.value = false
    }

    if (item == 'review') {
        personalInfo.value = false
        personalInfoStep.value = true

        addressInfo.value = false
        addressInfoStep.value = true

        review.value = true
    }
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

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
    background: rgb(241 245 249);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgb(148 163 184);
    ;
    border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>