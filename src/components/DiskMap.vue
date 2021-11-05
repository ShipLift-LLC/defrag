<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { each, random, times } from 'lodash';

const store = useStore()

const ROWS = 16
const COLS = 76

// Generate a 2d array, and wrap in a ref for reactivity
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

const deduceRC = (pos) => { 
  return { 
    r: Math.floor(pos / COLS),
    c: pos % COLS
  }
}

const deducePos = ({ r, c}) => {
  return (r * COLS) + c
}


const writeNewBlock = () => {
  store.commit('INCREMENT_WRITE_LOC')
  if (store.state.writeLoc >= COLS*ROWS) {
    console.log('writeLoc wrapped')
    store.commit('RESET_WRITE_LOC')
  }

  var pos = deduceRC(store.state.writeLoc)
  var updateRow = MAP.value[pos.r]

  switch (updateRow[pos.c].symbol) {
    case '▓':
      updateRow[pos.c].class = 'highlight'
      updateRow[pos.c].symbol = '■'
    break
    case '■':
      store.commit('INCREMENT_DEFRAGGED')
      updateRow[pos.c].class = 'highlight'
      writeNewBlock()
    break
    default:
      writeNewBlock()
  }
}

// Hunt and peck
var missLog = []

const clearMissLog = () => {
  each(missLog, (v) => {
    MAP.value[v.r][v.c].symbol = '▓'
  })
  missLog = []
}

setInterval(() => {
  var min = deduceRC(store.state.writeLoc)

  var r = random(min.r, ROWS - 1)
  var c = random(0, COLS - 1)

  var pos = deducePos({ r, c })

  if (pos <= store.state.writeLoc + 2) { return }

  var updateRow = MAP.value[r]

  switch (updateRow[c].symbol) {
    case '▓':
      missLog.push({r,c})
      updateRow[c].symbol = 'r'
    break
    case '■':
      store.commit('INCREMENT_DEFRAGGED')
      updateRow[c].symbol = 'r'
      
      setTimeout(() => {
        writeNewBlock()
        updateRow[c].symbol = '▓'
      }, 250)
      
      if (missLog.length > 0) {
        writeNewBlock()
        clearMissLog()
      }
    break
  } 

  if (missLog.length >= 5) {
    writeNewBlock()
    clearMissLog()
  }
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
