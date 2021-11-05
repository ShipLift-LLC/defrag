import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      blockClusterSize: 41,
      fragmentCount: 0,
      defragged: 0,
      writeLoc: 0,
    }
  },
  getters: {
    cluster (state) {
      return state.writeLoc * state.blockClusterSize
    }
  },
  mutations: {
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
    }
  }
})


export default store
