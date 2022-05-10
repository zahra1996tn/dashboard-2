<template>
  <div class="banner-card total-card">
    <div class="chartjs-size-monitor">
      <div class="chartjs-size-monitor-shrink"></div>
    </div>
    <div class="card-block">
      <div class="text-center p-t-20">
        <h4 class="titl-chrt">{{ title }}</h4>
        <p class="m-0">{{ number }}</p>
      </div>
    </div>
    <area-chart
      :id='bnr'
      class="chartjs-render-monitor"
      :colors="['blue']"
      :data="{
        '2010': 28,
        '2011': 35,
        '2012': 36,
        '2013': 48,
        '2014': 46,
        '2015': 42,
        '2016': 60,
      }"
    ></area-chart>
  </div>
</template>

<script>
export default {
  props: ["title", "number",'bnr','clr'],
};
</script>

<style>
</style>