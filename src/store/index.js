import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      bar: "Reading...",
      blockClusterSize: 41,
      fragmentCount: 0,
      defragged: 0,
      writeLoc: 0,
      paused: false,
    };
  },
  getters: {
    cluster (state) {
      return state.writeLoc * state.blockClusterSize
    }
  },
  mutations: {
    SET_BAR (state, val) {
      state.bar = val
    },
    RESET_WRITE_LOC (state) {
      state.writeLoc = 0
    },
    INCREMENT_WRITE_LOC (state) {
      state.writeLoc++
    },
    INCREMENT_DEFRAGGED (state) {
      state.defragged++
    },
    INCREMENT_FRAGMENTS (state) {
      state.fragmentCount++
    },
    PAUSE_DEFRAG (state) {
      state.paused = true;
    },
    UNPAUSE_DEFRAG (state) {
      state.paused = false;
    }
  }
})


export default store
