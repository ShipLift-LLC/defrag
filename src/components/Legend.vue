<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const blockClusterSize = computed(() => store.state.blockClusterSize)
</script>
<template>
<pre>
┌────────────── Legend ──────────────┐
│ ■ - Used          ▓ - Unused       │
│ r - Reading       W - Writing      │
│ B - Bad           X - Unmovable    │
│ Drive C:    1 block = {{ blockClusterSize }} clusters  │
└────────────────────────────────────┘
</pre>
</template>
<style scoped>
pre {
  margin: auto;
}
</style>
