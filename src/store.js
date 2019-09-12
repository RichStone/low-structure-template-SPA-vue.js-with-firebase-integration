import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: null
}

const mutations = {
  updateUser (state, { user }) {
    Vue.set(state, 'user', user)
  }
}
const getters = {
  user: state => state.user
}
const actions = {
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store