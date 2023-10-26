<template>
    <div>
        <Header>
            <Breadcumb active="Enrollment" />
            <NuxtLink to="/admission" class="btn-primary">
                <img src="/icons/new_admission.svg" alt="">
                New Admission
            </NuxtLink>
        </Header>

        <MainContent>

            <div class="flex flex-wrap gap-6">
                <InputSearch placeholder="Search Student" class="grow" />

                <FilterDropdown button-name="Filter" button-class="h-14 border border-slate-200"
                    show-arrow-color="text-slate-600">
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        Excel
                    </a>
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        PDF
                    </a>
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        CVC
                    </a>
                </FilterDropdown>

                <select name=""
                    class="p-4 lg:max-w-48 bg-white rounded-xl border border-slate-200 outline-none focus:ring-1 lg:max-w-[220px] w-full flex-grow text-sm h-14 focus:ring-cyan-600 focus:border-cyan-600">
                    <option value="">Sort by</option>
                    <option value="">Pending</option>
                    <option value="">Confirmed</option>
                    <option value="">Cancelled</option>
                </select>
                <div class="flex-grow">
                    <input type="date"
                        class="w-full h-14 p-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-1 outline-none text-slate-400 text-sm font-normal focus:ring-cyan-600 focus:border-cyan-600">
                </div>
                <Dropdown button-name="Export to" button-class="bg-blue-500 text-white h-14" show-arrow-color="text-white">
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        Excel
                    </a>
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        PDF
                    </a>
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        CVC
                    </a>
                </Dropdown>
            </div>

            <div class="mt-4">

                <table class="table-auto w-full">
                    <thead class="bg-slate-100 text-slate-800">
                        <tr>
                            <td class="p-4 rounded-s-lg">Date</td>
                            <td class="p-4">Student</td>
                            <td class="p-4">Course</td>
                            <td class="p-4 rounded-e-lg">Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="enroll in enrollments" :key="enroll.id">
                            <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                {{ enroll.date }}
                            </td>
                            <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                {{ enroll.student }}
                            </td>
                            <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                {{ enroll.course }}
                            </td>
                            <td class="p-4 text-slate-800 text-sm font-normal border-b min-w-[240px]">
                                <div class="flex justify-between items-center">
                                    <span class="px-1.5 py-1 rounded-md text-white text-xs font-normal"
                                        :class="checkStatus(enroll.status)">
                                        {{ enroll.status }}
                                    </span>
                                    <NuxtLink v-if="enroll.isPaid" to="/admission"
                                        class="px-2 py-1.5 bg-slate-600 rounded-lg text-white text-sm leading-normal">
                                        Pay Now
                                    </NuxtLink>

                                    <!-- action button -->
                                    <Menu as="div" class="relative inline-block text-right">
                                        <div>
                                            <MenuButton>
                                                <EllipsisHorizontalIcon class="h-5 w-5 text-gray-800" aria-hidden="true" />
                                            </MenuButton>
                                        </div>
                                        <transition enter-active-class="transition ease-out duration-100"
                                            enter-from-class="transform opacity-0 scale-95"
                                            enter-to-class="transform opacity-100 scale-100"
                                            leave-active-class="transition ease-in duration-75"
                                            leave-from-class="transform opacity-100 scale-100"
                                            leave-to-class="transform opacity-0 scale-95">
                                            <MenuItems
                                                class="absolute right-5 z-10 w-24 top-3 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div class="p-0">
                                                    <MenuItem v-slot="{ active }">
                                                    <nuxt-link to="/"
                                                        :class="[active ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                                                        Edit
                                                    </nuxt-link>
                                                    </MenuItem>
                                                    <MenuItem v-slot="{ active }">
                                                    <nuxt-link to=""
                                                        :class="[active ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                                                        Cancel
                                                    </nuxt-link>
                                                    </MenuItem>
                                                </div>
                                            </MenuItems>
                                        </transition>
                                    </Menu>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </MainContent>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Enrollment',
});

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { EllipsisHorizontalIcon } from '@heroicons/vue/20/solid';

const enrollments = [
    {
        id: 1,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Confirmed',
        isPaid: false
    },
    {
        id: 2,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Confirmed',
        isPaid: false
    },
    {
        id: 3,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Pending',
        isPaid: true
    },
    {
        id: 4,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Pending',
        isPaid: true
    },
    {
        id: 5,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Confirmed',
        isPaid: false
    },
    {
        id: 6,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Cancelled',
        isPaid: true
    },
    {
        id: 7,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Confirmed',
        isPaid: false
    },
    {
        id: 8,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Cancelled',
        isPaid: false
    },
    {
        id: 9,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Pending',
        isPaid: true
    },
    {
        id: 10,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Cancelled',
        isPaid: false
    },
    {
        id: 15,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Confirmed',
        isPaid: false
    },
    {
        id: 16,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Cancelled',
        isPaid: true
    },
    {
        id: 17,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Confirmed',
        isPaid: false
    },
    {
        id: 18,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Cancelled',
        isPaid: false
    },
    {
        id: 19,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Pending',
        isPaid: true
    },
    {
        id: 11,
        date: '12 Jul, 2023',
        student: 'Mohammad Mahfuz',
        course: 'Professional Web Development',
        status: 'Cancelled',
        isPaid: false
    }
];

const checkStatus = (status) => {
    if (status == 'Cancelled') {
        return 'bg-red-500';
    } else if (status == 'Confirmed') {
        return 'bg-cyan-600';
    } else {
        return 'bg-blue-500';
    }
}

</script>

<style scoped></style>