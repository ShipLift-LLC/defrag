<script setup>
import { ref } from 'vue'
import { each, fill, random, times } from 'lodash';

const ROWS = 16
const COLS = 76

// Generate a 2d array
const MAP = times(ROWS, () => { return fill(Array(COLS), '▓') })
MAP[0][0] = 'X'

each(MAP, (row, r) => {
  each(row, (col, c) => {
    if (r == 0 && c == 0) { return }
    MAP[r][c] = '▓'
    MAP[r][c] = (random(0, random(1, 15)) == 1) ? '■' : MAP[r][c]
    MAP[r][c] = (random(0, random(50, 200)) == 3) ? 'X' : MAP[r][c]
    MAP[r][c] = (random(0, random(15, 1000)) == 2) ? 'B' : MAP[r][c]
  })
})


</script>

<template>
  <div class="container">
    <div>
      <div class="row" v-for="(r, k) in MAP" :key="k">
        <template v-for="(c, k) in r" :key="k">
          <span>{{ c }}</span>
        </template>
      </div>
    </div>
  </div>
  <!-- ▓▒░ -->
</template>

<style scoped>
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
