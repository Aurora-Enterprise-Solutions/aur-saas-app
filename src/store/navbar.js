const DEFAULTS = {
    section: {
        title: '',
    },
    search: {
        visible : false,
        value   : '',
        event   : null,
    },
}

export const state = () => ( {
    section : DEFAULTS.section,
    search  : DEFAULTS.search,
} )

export const mutations = {
    showSearch           : (state) => state.search.visible = true,
    hideSearch           : (state) => state.search.visible = false,
    setSearchValue       : (state, value) => state.search.value = value || '',
    setSearchChangeEvent : (state, event) => state.search.event = event,
    setSectionTitle      : (state, value) => state.section.title = value,
}

export const actions = {
    showSearch     : ( { commit } ) => commit('showSearch'),
    hideSearch     : ( { commit } ) => commit('hideSearch'),
    setSearchValue : ( { commit, state }, value) => {

        commit('setSearchValue', value)
        if (state.search.event)
            state.search.event(value)

    },
    resetSearch: ( { commit } ) => {

        commit('setSearchValue', DEFAULTS.search.value)
        commit('setSearchChangeEvent', DEFAULTS.search.event)

    },
}

export const getters = {
    searchVisible : (state) => state.search.visible,
    searchValue   : (state) => state.search.value,
    sectionTitle  : (state) => state.section.title,
}
