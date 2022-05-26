import { getNameInitials, getFullName } from '@/utils/user'
import { User } from '../../setup/doctypes/user/class'

export const state = () => ( {
    user : new User(),
    role : {},
} )

export const mutations = {
    setId       : (state, id) => state.user.id = id,
    setName     : (state, name) => state.user.name = name,
    setLastName : (state, lastName) => state.user.lastName = lastName,
    setEmail    : (state, email) => state.user.email = email,
    setAvatar   : (state, avatar) => state.user.avatar = avatar,
    setUserRole : (state, role) => state.user.role = role,
    setRole     : (state, role) => state.role = role,
}

export const actions = {
    setId       : ( { commit }, value) => commit('setId', value),
    setName     : ( { commit }, value) => commit('setName', value),
    setLastName : ( { commit }, value) => commit('setLastName', value),
    setEmail    : ( { commit }, value) => commit('setEmail', value),
    setAvatar   : ( { commit }, value) => commit('setAvatar', value),
    setUserRole : async ( { commit }, value) => {

        commit('setUserRole', value)

        // const role = await Role.getRoleById(value)
        // commit('setRole', role)

    },

    init: async ( { dispatch }, value) => {

        dispatch('setId', value.id)
        dispatch('setName', value.name)
        dispatch('setLastName', value.lastName)
        dispatch('setEmail', value.email)
        dispatch('setAvatar', value.avatar)
        await dispatch('setUserRole', value.role)

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
    roleName     : (state) => state.role.name || '',
    nameInitials : (state) => getNameInitials.bind(state.user)(),
}
