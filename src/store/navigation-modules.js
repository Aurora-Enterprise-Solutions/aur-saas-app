export const state = () => ( {
    visible: false,
} )

export const mutations = {
    show : (state) => state.visible = true,
    hide : (state) => state.visible = false,
}

export const actions = {
    toggle: ( { commit, getters } ) => getters.visible ? commit('hide') : commit('show'),
}

export const getters = {
    visible: (state) => state.visible,
}
