<script setup>
import { useStore } from "vuex";
const store = useStore();

{
  {
    store.state.bar;
  }
}
</script>
<template>
  <div class="container">
    <span class="title">Optimize</span>
    <span class="action">
      <span class="contrast"
        >Esc={{ store.state.paused ? "Start" : "Stop" }} Defrag</span
      >
      <a href="https://github.com/ShipLift-LLC/defrag" target="_blank">
        <i class="github" />
        GitHub
      </a>
    </span>
  </div>
</template>
<style scoped>
a {
  all:unset;
  cursor: pointer;
}
.github {
  height: 16px;
  width: 24px;
  display: inline-block;
  image-rendering: pixelated;
  background-image: url("/GitHub.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position-x: left;
  margin: auto;
  margin-left: 20px;
  margin-bottom: -4px;
}

.container {
  background: #fff;
  color: #000;
  font-weight: 900;
  width: 100%;
  height: 18px;
}

.title {
  padding-left: 50px;
}

.action {
  width: 275px;
  float: right;
  margin-right: 20px;
  text-align: center;
}

.contrast {
  background: #000;
  color: #fff;
}
</style>
