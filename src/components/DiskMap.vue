<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { each, random, times } from 'lodash';

const store = useStore()

const ROWS = 16
const COLS = 76

// Generate a 2d array
var MAP = ref(times(ROWS, () => { return Array(COLS) }))

each(MAP.value, (row, r) => {
  each(row, (col, c) => {    
    switch (true) {
      case (random(0, random(1, 15)) == 1):
        store.commit('INCREMENT_FRAGMENTS')
        MAP.value[r][c] = {symbol: '■', class: ''}
      break
      case (random(0, random(50, 200)) == 3):
        MAP.value[r][c] = {symbol: 'X', class: ''}
      break
      case (random(0, random(15, 1000)) == 2):
        MAP.value[r][c] = {symbol: 'B', class: ''}
      break
      default:
        MAP.value[r][c] = {symbol: '▓', class: ''}
    }
  })
})

// First block is always unmovable
MAP.value[0][0] = {symbol: 'X', class: ''}

// Hunt and peck
setInterval(() => {
  var miss = 0
  var r = random(0, ROWS)
  var c = random(0, COLS)
  var updateRow = MAP.value[r]
  console.log(updateRow)
  updateRow[c].class = 'highlight'
  var cell = MAP.value.splice(r, 1, updateRow)

}, 150)

</script>

<template>
  <div class="container">
    <div>
      <div class="row" v-for="(r, k) in MAP" :key="k">
        <template v-for="(c, k) in r" :key="k">
          <span :class="c.class">{{ c.symbol }}</span>
        </template>
      </div>
    </div>
  </div>
  <!-- ▓▒░ -->
</template>

<style scoped>

span.highlight {
  color: #fff46d
}
div.container {
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
div.row {
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
  letter-spacing: 3px;
}
</style>
