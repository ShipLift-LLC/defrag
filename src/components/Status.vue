<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import { repeat } from "lodash";
import { Interval, DateTime } from "luxon";

const store = useStore()

const timeStarted = DateTime.utc()

var current = ref(DateTime.utc())
// TODO: Best way to trigger update with V3 SFC?
setInterval(() => {
  current.value = DateTime.utc()
}, 500)


const elapsed = (current) => Interval
  .fromDateTimes(
    timeStarted,
    current
  )
  .toDuration()
  .toFormat('hh:mm:ss')

var progressBar = () => {
  var percentCalc = Math.floor((store.state.defragged / store.state.fragmentCount) * 34)
  return repeat('█', percentCalc).padEnd(34, '▒')
}

var percentCalc = () => {
  return String(Math.floor((store.state.defragged / store.state.fragmentCount)* 100)).padStart(3, ' ')
}


const count = computed(() => store.state.count)
var cluster = () => Number(store.getters.cluster).toLocaleString('en-US').padEnd(9, ' ')
</script>
<template>
<pre>
┌────────────── Status ──────────────┐
│ Cluster {{ cluster() }}             {{ percentCalc() }}% │
│ {{      progressBar()    }} │
│       Elapsed Time: {{ elapsed(current) }}       │
│         Full Optimization          │
└────────────────────────────────────┘
</pre>
</template>
<style scoped>
pre {
  margin: auto;
}
</style>
