<script setup>
import Toolbar from './components/Toolbar.vue'
import DiskMap from './components/DiskMap.vue'
import Status from './components/Status.vue'
import Legend from './components/Legend.vue'
import Footer from './components/Footer.vue'
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
