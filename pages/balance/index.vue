<template>
    <div>
        <Header>
            <Breadcumb active="Balance" />
            <NuxtLink to="/admission" class="btn-primary">
                <img src="/icons/new_admission.svg" alt="">
                New Admission
            </NuxtLink>
        </Header>

        <MainContent>

            <div class="grid grid-cols-1 gap-6 xl:grid-cols-3 h-full">
                <div class="xl:col-span-2">

                    <!-- overview Statistics chart -->
                    <div
                        class="justify-between items-center gap-6 flex px-6 pt-4 pb-1 rounded-tl-xl rounded-tr-xl bg-slate-100">
                        <div class="grow shrink basis-0 text-slate-900 text-2xl font-semibold leading-loose">
                            Sale Overview
                        </div>
                        <select
                            class="bg-slate-100 rounded-xl border border-slate-200 text-slate-800 text-sm font-normal py-[10px] min-w-[140px] focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 outline-none">
                            <option value="">This Year</option>
                            <option value="">This Month</option>
                        </select>
                    </div>
                    <div class="bg-slate-100 rounded-bl-xl rounded-br-xl border border-slate-100">
                        <client-only placeholder="Loading...">
                            <SaleOverviewChart />
                        </client-only>
                    </div>

                    <!-- Last Transaction -->
                    <div class="flex justify-between gap-3 items-center mt-8">
                        <div class="text-slate-800 text-lg font-normal leading-normal">Last Transaction</div>
                        <NuxtLink to="/balance/transaction" class="text-cyan-600 text-sm font-normal leading-tight tracking-tight">View All
                        </NuxtLink>
                    </div>

                    <table class="table-auto w-full mt-4">
                        <thead class="bg-slate-200 text-slate-800">
                            <tr>
                                <td class="p-4 rounded-s-lg">Date</td>
                                <td class="p-4">Txn. ID</td>
                                <td class="p-4">Name</td>
                                <td class="p-4">Method</td>
                                <td class="p-4 rounded-e-lg">Amount</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    16 Jun, 2023
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    CP06526947
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    Mohammad Mahfuz
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">

                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    -€ 25.00
                                </td>
                            </tr>

                            <tr>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    16 Jun, 2023
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    CP06526947
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    Mohammad Mahfuz
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    Bank
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    -€ 25.00
                                </td>
                            </tr>

                            <tr>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    16 Jun, 2023
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    CP06526947
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    Mohammad Mahfuz
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">

                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    -€ 25.00
                                </td>
                            </tr>

                            <tr>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    16 Jun, 2023
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    CP06526947
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    Mohammad Mahfuz
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    Online Payment
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    -€ 25.00
                                </td>
                            </tr>

                            <tr>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    16 Jun, 2023
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    CP06526947
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    Mohammad Mahfuz
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">

                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    -€ 25.00
                                </td>
                            </tr>

                            <tr>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    16 Jun, 2023
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    CP06526947
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    Mohammad Mahfuz
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    Online Payment
                                </td>
                                <td class="p-4 text-slate-800 text-sm font-normal border-b">
                                    -€ 25.00
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <!-- right section -->
                <div class="">
                    <!-- wallet -->
                    <div
                        class="p-6 wallet bg-teal-600/30 rounded-2xl flex-col gap-6 flex bg-[url('/icons/wallet.svg')] bg-no-repeat bg-cover">
                        <div class="h-[72px] flex-col gap-4 flex">
                            <div class="grow text-white text-sm font-normal leading-tight tracking-tight">
                                Available Balance
                            </div>
                            <div class="text-white text-3xl font-semibold leading-9">
                                €3,265.75
                            </div>
                        </div>
                        <div class="gap-8 inline-flex">
                            <div class="grow basis-0 text-white text-sm font-normal leading-tight tracking-tight">
                                ****
                            </div>
                            <div class="grow basis-0 text-white text-sm font-normal leading-tight tracking-tight">
                                ****
                            </div>
                            <div class="grow basis-0 text-white text-sm font-normal leading-tight tracking-tight">
                                ****
                            </div>
                            <div class="grow basis-0 text-white text-sm font-normal leading-tight tracking-tight">
                                2255
                            </div>
                        </div>
                        <div class="gap-6 flex">
                            <div class="grow text-white text-lg font-normal leading-normal">
                                Luna Maria
                            </div>
                            <div class="grow text-white text-lg font-normal leading-normal">
                                4/19
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 mt-6">

                        <div class="p-6 bg-white rounded-xl shadow border border-slate-100">
                            <div class="flex justify-between items-center gap-2">
                                <p class="text-slate-400 text-sm font-normal leading-tight tracking-tight">
                                    Today's Sale
                                </p>
                                <div class="px-2 py-1 bg-teal-100 rounded-[18px] gap-2 flex">
                                    <ArrowTrendingUpIcon class="w-4 h-4 text-cyan-600"/>
                                    <div class="text-cyan-600 text-sm font-normal leading-tight tracking-tight">
                                        +10.25 %
                                    </div>
                                </div>
                            </div>
                            <div class="text-slate-800 text-2xl font-bold leading-loose mt-4">€1,265.75</div>
                        </div>

                        <div class="p-6 bg-white rounded-xl shadow border border-slate-100">
                            <div class="flex justify-between items-center gap-2">
                                <p class="text-slate-400 text-sm font-normal leading-tight tracking-tight">
                                    Last Month Sale
                                </p>
                                <div class="px-2 py-1 bg-red-100 rounded-[18px] gap-2 flex">
                                    <ArrowTrendingDownIcon class="w-4 h-4 text-red-500"/>
                                    <div class="text-red-500 text-sm font-normal leading-tight tracking-tight">
                                        +2.35 %
                                    </div>
                                </div>
                            </div>
                            <div class="text-slate-800 text-2xl font-bold leading-loose mt-4">€4,267.55</div>
                        </div>

                        <div class="p-6 bg-white rounded-xl shadow border border-slate-100">
                            <div class="flex justify-between items-center gap-2">
                                <p class="text-slate-400 text-sm font-normal leading-tight tracking-tight">
                                    Last Withdrawn
                                </p>
                            </div>
                            <div class="text-slate-800 text-2xl font-bold leading-loose mt-4">€2,900.00</div>
                        </div>

                    </div>
                </div>
            </div>


        </MainContent>
    </div>
</template>

<script setup>

import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from '@heroicons/vue/20/solid';

useSeoMeta({
    title: 'Balance',
});

</script>

<style scoped></style>