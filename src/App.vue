<template>
  <navbar />
<!-- <line-chart :data="{'2017-05-13': 2, '2017-05-14': 5}"></line-chart>
<canvas id="myChart" width="400" height="400"></canvas> -->
<router-view></router-view>
</template>

<script>
import navbar from './components/nav-bar.vue'
export default {
  name: 'App',
  components: {
    navbar,
    
  }
}
</script>

<style>
@import './assets/css/style.css'
</style>
