<template>
    <div>
        <Header>
            <Breadcumb item="Balance" item-link="/balance" active="All Transactions" />
            <NuxtLink to="/admission" class="btn-primary">
                <img src="/icons/new_admission.svg" alt="">
                New Admission
            </NuxtLink>
        </Header>

        <MainContent>

            <div class="">

                <div class="flex flex-wrap gap-6">
                <InputSearch placeholder="Search by Transaction ID" class="grow"/>

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


        </MainContent>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'All Transactions',
});

</script>

<style scoped></style>