<template>
    <Bars3BottomLeftIcon class="w-7 h-7 z-10 absolute top-10 left-3 cursor-pointer md:hidden" @click="sidebar = !sidebar"/>

    <div class="h-screen bg-slate-100 w-72 px-6 md:w-16 md:px-1 lg:w-72 lg:px-6 pt-6 pb-3 transition duration-700 ease-in-out fixed top-0 flex justify-between flex-col gap-6 md:translate-x-0 overflow-y-scroll md:overflow-hidden z-40"
        :class="{ '-translate-x-[100%]': sidebar }">
        <div class="absolute right-2 top-2 md:hidden" @click="sidebar = true">
            <XCircleIcon class="w-8 h-8 text-slate-500"/>
        </div>
        <div class="sidebar">
            <NuxtLink to="/" class="gap-2 items-end justify-center md:hidden lg:flex flex">
                <img src="/images/logo.png" class="h-16" alt="brand logo">
            </NuxtLink>
            <div class="flex gap-3 flex-col w-full mt-6 menuItem">
                <NuxtLink :to="menu.page_url" v-for="menu in menuList" :key="menu.name"
                    class="p-3 transition duration-200 rounded-lg justify-start items-start gap-2 flex hover:bg-slate-200 group">
                    <div class="w-6 h-6">
                        <img :src="menu.icon" alt="">
                    </div>
                    <div
                        class="text-slate-800 md:group-hover:block md:group-hover:absolute md:group-hover:left-16 lg:group-hover:relative lg:group-hover:left-0 relative text-base font-normal md:hidden lg:block transition duration-200">
                        {{ menu.name }}</div>
                </NuxtLink>
            </div>
        </div>

        <div class="flex flex-col gap-6">
            <div
                class="group border border-transparent rounded-2xl p-3 hover:border-slate-200 hover:bg-slate-100 md:border-slate-200 lg:border-transparent">
                <div class="flex justify-between items-center gap-2">
                    <img src="/images/avator.png" alt="" class="w-12 h-12 rounded-full md:hidden lg:block">
                    <a href="" class="hidden md:block lg:hidden group-hover:block no-underline">
                        <img src="/icons/logout.svg" alt="">
                    </a>
                </div>
                <span class="block text-sm font-bold md:hidden lg:block">Luna Maria</span>
                <span class="text-xs text-slate-500 md:hidden lg:block">example@mail.com</span>
            </div>
            <div class="text-xs text-slate-500 border-t border-slate-200 pt-3">
                Powered by: <span class="text-slate-800">CSN Limited</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Bars3BottomLeftIcon, XCircleIcon } from '@heroicons/vue/24/solid';
export default {
    components:{
        Bars3BottomLeftIcon, XCircleIcon
    },
    data() {
        return {
            sidebar: true,
            menuList: [
                {
                    icon: '/icons/dashboard.svg',
                    name: 'Dashboard',
                    page_url: '/'
                },
                {
                    icon: '/icons/enrollment.svg',
                    name: 'Enrollment',
                    page_url: '/enrollment'
                },
                {
                    icon: '/icons/student.svg',
                    name: 'Students',
                    page_url: '/student'
                },
                {
                    icon: '/icons/course.svg',
                    name: 'Courses',
                    page_url: '/course'
                },
                {
                    icon: '/icons/balance.svg',
                    name: 'Balance',
                    page_url: '/balance'
                },
                {
                    icon: '/icons/enrollment.svg',
                    name: 'Profile',
                    page_url: '/profile'
                }
            ]
        }
    },
}
</script>

<style>
.menuItem .router-link-active, .menuItem .router-link-exact-active {
    background: #1E293B !important;
}

.menuItem .router-link-active .text-slate-800 {
    color: #fff;
}

.menuItem .router-link-active img {
    filter: brightness(0) invert(1);
}
</style>