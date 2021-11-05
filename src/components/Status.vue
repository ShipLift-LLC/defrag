<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import { Interval, DateTime, Duration } from "luxon";

const timeStarted = DateTime.utc()

var current = ref(DateTime.utc())
// TODO: Best way to trigger update with V3 SFC?
setInterval(() => {
  current.value = DateTime.utc()
}, 500)


var elapsed = (current) => Interval
  .fromDateTimes(
    timeStarted,
    current
  )
  .toDuration()
  .toFormat('hh:mm:ss')

// var elapsed = '00:00:08'

var progressBar = '███████████'.padEnd(34, '▒')
var percent = '36'.padStart(3, ' ')

const store = useStore()
const count = computed(() => store.state.count)
var clusters = Number(store.getters.clusters).toLocaleString('en-US').padEnd(9, ' ')
</script>
<template>
<pre>
┌────────────── Status ──────────────┐
│ Cluster {{ clusters }}             {{ percent }}% │
│ {{         progressBar          }} │
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
