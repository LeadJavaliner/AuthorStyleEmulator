<template>
    <div>
      <canvas ref="chart"></canvas>
    </div>
  </template>
  
  <script>
  import { Pie, mixins } from 'vue-chartjs';
  
  export default {
    extends: Pie,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    mounted() {
      this.renderChart(this.chartData, this.options);
    },
  };
  </script>
  