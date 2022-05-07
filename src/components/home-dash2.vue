<template>
<Line-chart :data="chartData"></Line-chart>
jjj
</template>

<script>

export default {
components:{

},
data(){
  return{
    chartData:{
      '2017-5-2':2,
      '2017-5-5':48,
      '2017-5-9':40
    }
  }
}
}
</script>

<style>

</style>