export const state = () => ( {
    notifications: [],
} )

export const mutations = {
    setNotifications: (state, notifications) => state.notifications = notifications,
}

export const actions = {
    setNotifications: ( { commit }, value) => commit('setNotifications', value),

    init: async ( { commit }, value) => {

        commit('setNotifications', value.notifications)

    },
}

export const getters = {
    notifications : (state) => state.notifications || [],
    count         : (state) => state.notifications.length || 0,
    countString   : (state) => {

        const count = state.notifications.length || 0

        return count > 99 ? '99+' : count.toString()

    },
}
