<script setup>
import Toolbar from './components/Toolbar.vue'
import DiskMap from './components/DiskMap.vue'
import Status from './components/Status.vue'
import Legend from './components/Legend.vue'
import Footer from './components/Footer.vue'
import { useStore } from 'vuex'
import {onMounted, onBeforeUnmount} from 'vue';
const store = useStore();

const keyup = (event) => {
  if(event.key === 'Escape') {
    if(store.state.paused) store.commit('UNPAUSE_DEFRAG')
    else store.commit('PAUSE_DEFRAG');
  }
}
const mounted = onMounted(() => {
  window.addEventListener('keyup', keyup) 
})

const unmounted = onBeforeUnmount(() => {
  window.removeEventListener('keyup', keyup);
})

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

<template >  
  <Toolbar />
  <div @keyup.up="pause">
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
  height: 100%;
  display: flex;
  flex-direction: column;
}

html {
  height: 100vh;
}

body {
  font-size: 16px;
  margin: 0;
  color: white;
  background-color: #4f68ff;
  transform-origin: top center;
  transform: scaleY(1.6);
  height: 62.5%;
}

.details {
  font-size: 16px;
  display: flex;
  max-width: 1240px;
  margin-left:auto;
  margin-right: auto;
}
@media screen and (max-width: 900px){
  body {
    font-size: 12px;
  }
  .details {
    font-size: 14px;
  }
}
@media screen and (max-width: 690px){
  .details {
    font-size: 12px;
  }
}
@media screen and (max-width: 575px){
  .details {
    font-size: 14px;
    flex-direction: column;
  }
}
</style>
