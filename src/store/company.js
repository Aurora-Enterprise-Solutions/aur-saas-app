import voca from 'voca'

export const state = () => ( {
    id      : '',
    name    : '',
    logoUri : '',
    cdn     : '',
} )

export const mutations = {
    setId      : (state, id) => state.id = id,
    setName    : (state, name) => state.name = name,
    setLogoUri : (state, logoUri) => state.logoUri = logoUri,
    setCdn     : (state, cdn) => state.cdn = cdn,
}

export const actions = {
    setId      : ( { commit }, value) => commit('setId', value),
    setName    : ( { commit }, value) => commit('setName', value),
    setLogoUri : ( { commit }, value) => commit('setLogoUri', value),
    setCdn     : ( { commit }, value) => commit('setCdn', value),

    init: async ( { commit }, value) => {

        commit('setId', value.id)
        commit('setName', value.name)
        commit('setLogoUri', value.logoUri)
        commit('setCdn', value.cdn)

    },
}

export const getters = {
    id      : (state) => state.id,
    name    : (state) => voca.titleCase(state.name).trim(),
    logoUri : (state) => !!state.logoUri ? state.logoUri : require('@/assets/images/company_default_logo.svg'),
    cdn     : (state) => state.cdn,
}
