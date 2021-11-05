import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      blockClusterSize: 41,
      fragmentCount: 0,
      defragged: 0
    }
  },
  getters: {
    clusters (state) {
      return state.fragmentCount * state.blockClusterSize
    }
  },
  mutations: {
    INCREMENT_DEFRAGGED (state) {
      state.defragged++
    },
    INCREMENT_FRAGMENTS (state) {
      state.fragmentCount++
    }
  }
})


export default store
