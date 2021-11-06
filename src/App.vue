<script setup>
import Toolbar from './components/Toolbar.vue'
import DiskMap from './components/DiskMap.vue'
import Status from './components/Status.vue'
import Legend from './components/Legend.vue'
import Footer from './components/Footer.vue'

// import { random } from 'lodash'
// import { Howl } from 'howler'

// const LENGTH = 1.468

// var playNext = (hasPaused = false, endPlay = false) => {
//   if (endPlay === true) {
//     return
//   }

//   if( hasPaused === true ) {
//     console.log(hasPaused)
//     sound.seek(LENGTH/random(1, 5))
//     sound.play()
//     return
//   }

//   setTimeout(() => { 
//     playNext(true)
//   }, random(0.5,1.5) * 1000)
// }

// var sound = new Howl({
//   src: ['hdd.mp3'],
//   volume: 0.5,
//   onend: playNext
// })
// sound.play()

// var sound2 = new Howl({
//   src: ['hdd.mp3'],
//   volume: 0.5,
//   onend: playNext
// })
// sound2.play()

</script>

<template>  
  <Toolbar />
  <div>
    <DiskMap />
    <div class="details">
      <Status />
      <Legend />
    </div>
  </div>
  <Footer />
</template>

<style>
#app {
  font-family: Terminal, VT323, 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

body {
  font-size: 16px;
  margin: 0;
  color: white;
  background-color: #4f68ff;
  transform-origin: top center;
  transform: scaleY(1.6);
}

div.details {
  display: flex;
}
</style>
