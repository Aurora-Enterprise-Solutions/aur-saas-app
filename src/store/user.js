import { getNameInitials, getFullName } from '@/utils/user'
import { User } from '../classes/user'

export const state = () => ( {
    user: new User(),
} )

export const mutations = {
    setId       : (state, id) => state.user.id = id,
    setName     : (state, name) => state.user.name = name,
    setLastName : (state, lastName) => state.user.lastName = lastName,
    setEmail    : (state, email) => state.user.email = email,
    setAvatar   : (state, avatar) => state.user.avatar = avatar,
    setRole     : (state, role) => state.user.role = role,
    setRoleName : (state, roleName) => state.user.roleName = roleName,
}

export const actions = {
    setId       : ( { commit }, value) => commit('setId', value),
    setName     : ( { commit }, value) => commit('setName', value),
    setLastName : ( { commit }, value) => commit('setLastName', value),
    setEmail    : ( { commit }, value) => commit('setEmail', value),
    setAvatar   : ( { commit }, value) => commit('setAvatar', value),
    setRole     : ( { commit }, value) => commit('setRole', value),
    setRoleName : ( { commit }, value) => commit('setRoleName', value),

    init: async ( { dispatch }, value) => {

        dispatch('setId', value.id)
        dispatch('setName', value.name)
        dispatch('setLastName', value.lastName)
        dispatch('setEmail', value.email)
        dispatch('setAvatar', value.avatar)
        dispatch('setRole', value.role)
        dispatch('setRoleName', value.roleName)

    },
}

export const getters = {
    id           : (state) => state.user.id,
    name         : (state) => state.user.name,
    lastName     : (state) => state.user.lastName,
    email        : (state) => state.user.email,
    avatar       : (state) => state.user.avatar,
    role         : (state) => state.user.role,
    fullName     : (state) => getFullName.bind(state.user)(),
    roleName     : (state) => state.user.roleName,
    nameInitials : (state) => getNameInitials.bind(state.user)(),
}
