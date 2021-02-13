const state = () => ({
  priorities: []
})

const mutations = {
  setPriorities (state, items) {
    state.priorities = items
  }
}

const actions = {
  fetchPriorities ({ commit }, items) {
    commit('setPriorities', items)
  }
}

export default {
  state,
  mutations,
  actions
}
