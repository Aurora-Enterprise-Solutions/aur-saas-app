import { DataTableManager, getDataTable, push, setAttr, remove as removeDataTable, removeData } from './../../core/classes/data-table.js'

export const state = () => ( {
    ...new DataTableManager(),
} )

export const mutations = {
    setDataTable     : (state, dataTable) => push(state.dataTables, dataTable),
    removeDataTable  : (state, uid) => removeDataTable(state.dataTables, uid),
    setDataTableAttr : (state, { uid, ...attrs } ) => {

        const dataTable = getDataTable(state.dataTables, uid)
        Object.entries(attrs).forEach( ( [ attr, value ] ) => setAttr(dataTable, attr, value) )

    },

    removeDataFromDataTable: (state, { uid, item } ) => {

        const dataTable = getDataTable(state.dataTables, uid)
        removeData(dataTable, item)

    },
}

export const actions = {
    setDataTable     : ( { commit }, value) => commit('setDataTable', value),
    removeDataTable  : ( { commit }, value) => commit('removeDataTable', value),
    setDataTableAttr : ( { commit }, value) => commit('setDataTableAttr', value),

    fetchDataTable: async ( { state, commit }, { uid, ...params } ) => {

        const { crudUrls } = getDataTable(state.dataTables, uid) || {}

        try {

            // TODO replace with axios call
            const result = [
                { _id: '1', username: 'jesus.barrientos@aurora-enterprise.com', state: 'active', job: 'Web Developer', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpINRxilsxu9AldotOSirz-KeZEQrczDwATFWDpwlHTFzSMgTxmIpOLZXy6zvzd940nyQIA6WbyPdp9AniiVS8_OOZZLiOkKfJ1Q&usqp=CAU&ec=45707744' },
                { _id: '2', username: 'jose.henriquez@aurora-enterprise.com', state: 'inactive', job: 'Web Developer', avatar: 'https://scontent.fkna2-1.fna.fbcdn.net/v/t31.18172-8/13147587_10205882254765127_4612601948293491977_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=mdQF5L-aigkAX_5YAzp&_nc_ht=scontent.fkna2-1.fna&oh=00_AT9OhHJjfLpvqQNZ7374wlZ9HaVbTs0UfDL3KINkAY_E7w&oe=62B2B91F' },
            ]
            commit('setDataTableAttr', { uid, data: result } )

        }
        catch (err) {

            // TODO setup error handler
            console.error(err.message)

        }

    },

    editRegistry: async ( { state, commit }, { uid, item } ) => {

        // TODO implement editRegistry

    },

    deleteRegistry: async ( { state, commit }, { uid, item } ) => {

        const { crudUrls } = getDataTable(state.dataTables, uid) || {}

        try {

            // TODO replace with axios call
            commit('removeDataFromDataTable', { uid, item } )

        }
        catch (err) {

            // TODO setup error handler
            console.error(err.message)

        }

    },
}

export const getters = {
    getDataTableSource : (state) => (uid) => state.dataTables[uid].data,
    loading            : (state) => (uid) => state.dataTables[uid].loading,
}
