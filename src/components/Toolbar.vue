<script setup>
import { useStore } from 'vuex'
const store = useStore()

{{ store.state.bar }}
</script>
<template>
  <div class="container">
    <span class="title">Optimize</span>
    <span class="action">Esc={{ store.state.paused ? 'Start' : 'Stop' }} Defrag</span>
  </div>
</template>
<style scoped>
.container {
  background: #fff;
  color: #000;
  font-weight: 900;
  width: 100%;
}

.title {
  padding-left: 50px;
}

.action {
  width: 175px;
  background: #000;
  color: #fff;
  float: right;
  margin-right: 20px;
  text-align: center;
}
</style>
