<template>
  <barchart :chart-data="data" :options="options" css-classes="chart-container"  />
</template>

<script>
import {BarChart} from 'vue-chart-3'
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { Chart , BarController, CategoryScale, LinearScale, BarElement } from 'chart.js'
Chart.register(BarController , CategoryScale , LinearScale , BarElement)
export default {
components:{
    BarChart
},
setup(){
    const dataValues = ref([
        [1,3,5,7,7,4,5],
        [1,5,2,6,3,7,2]
    ]),
    const data =computed(()=>({
        labels:['sun','mon','tuw','sat','wen','fri'],
        datasets:[
            {
                label :'Foo',
                data:dataValues.value[0],
                backgroundColor:'#268bd2'
            },
            {
                label :'Bar',
                data:dataValues.value[1],
                backgroundColor:'#2aa198'
            },
        ]
    }))
    const options = ref({
        Plugins:{
            title:{
                text:'Bar'
            }
        }
    }),
    return{
        options , data 
    }
}
}
</script>

<style>

</style>