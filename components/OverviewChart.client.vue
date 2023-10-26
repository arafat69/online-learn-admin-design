<template>
    <apexChart height="300" :options="options" :series="series"></apexChart>
</template>

<script>

export default {
    data() {
        return {
            // chart js
            options: {
                chart: {
                    type: 'bar',
                    height: 300,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '25%',
                        borderRadius: 6
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    labels: {
                        style: {
                            show: true,
                            colors: '#CBD5E1',
                            fontSize: '12px',
                            fontWeight: 400,
                            fontFamily: 'Poppins, sans-serif'
                        },
                    },
                },
                yaxis: {
                    labels: {
                        style: {
                            show: true,
                            colors: '#CBD5E1',
                            fontSize: '12px',
                            fontWeight: 400,
                            fontFamily: 'Poppins, sans-serif'
                        },
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands";
                        }
                    }
                },
            },
            series: [{
                    name: 'Net Profit',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                }],
        };
    },
}
</script>

<style lang="scss" scoped></style>