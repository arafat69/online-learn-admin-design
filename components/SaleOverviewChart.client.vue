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
                    type: 'line',
                    height: 300,
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    colors: ['#2DD4BF'],
                },
                xaxis: {
                    categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
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
                name: 'Sale',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }],
            fill: {
                colors: ['#E91E63', '#9C27B0']
            }
        };
    },
}
</script>

<style lang="scss" scoped></style>