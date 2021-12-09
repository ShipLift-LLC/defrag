<script setup>
import { useStore } from 'vuex'
const store = useStore()


</script>

<template>
  <div class="container">
    <span class="title">{{ store.state.bar }}</span>
    <span class="action"><a href="https://shiplift.io" target="_blank">ShipLift.io Defrag</a></span>
  </div>
</template>
<style scoped>
.title {
  padding-left: 10px;
}

.container {
  background: #fff;
  color: #ad2a13;
  font-weight: 900;
  width: 100%;
  margin-top: auto;
}

a {
  all:unset;
  cursor: pointer;
}
.action {
  float: right;
  margin-right: 20px;
  text-align: center;
  border-left: #000;
  border-left-width: 2px;
  border-left-style: solid;
  padding-left: 15px;
}
</style>
