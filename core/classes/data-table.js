import Vue from 'vue'

export class DataTable {

    static ALLOWED_MUTABLE_ATTRS() {

        return Object.freeze( [
            'crudUrls',
            'data',
        ] )

    }

    constructor( {
        uid,
        crudUrls,
        data,
        loading,
    } ) {

        this.uid = uid
        this.crudUrls = {
            list   : crudUrls ? crudUrls.list : null,
            create : crudUrls ? crudUrls.create : null,
            update : crudUrls ? crudUrls.update : null,
            delete : crudUrls ? crudUrls.delete : null,
        }

        this.validateUid()
        this.validateCrudUrls()

        this.data = data || []

        this.loading = loading || false

    }

    validateUid() {

        if (!this.uid)
            throw new Error(`DataTable: uid is required`)

    }

    validateCrudUrls() {

        if (!this.crudUrls.list)
            console.warn(`DataTable ${this.uid}: crudUrls.list is required`)

        if (!this.crudUrls.create)
            console.warn(`DataTable ${this.uid}: crudUrls.create is required`)

        if (!this.crudUrls.update)
            console.warn(`DataTable ${this.uid}: crudUrls.update is required`)

        if (!this.crudUrls.delete)
            console.warn(`DataTable ${this.uid}: crudUrls.delete is required`)

    }

}

export class DataTableManager {

    constructor( {
        dataTables,
    } = {
        dataTables: {},
    } ) {

        this.dataTables = dataTables

    }

}

// Functionalities

export function getDataTable(dataTables, uid) {

    return dataTables[uid]

}

export function push(dataTables, dataTable) {

    const newDataTable = new DataTable(dataTable)
    Vue.set(dataTables, newDataTable.uid, newDataTable)

}

export function remove(dataTables, uid) {

    if (!dataTables[uid] )
        throw new Error(`DataTableManager: dataTable with uid ${uid} not found`)

    Vue.delete(dataTables, uid)

}

export function setAttr(dataTable, attr, value) {

    if (!DataTable.ALLOWED_MUTABLE_ATTRS().includes(attr) )
        console.warn(`DataTable: attr "${attr}" is not allowed to be mutable`)
    else
        Vue.set(dataTable, attr, value)

}

export function removeData(dataTable, { _id } ) {

    const cloneData = [ ...dataTable.data ]
    const index = cloneData.findIndex(item => item._id === _id)

    if (index === -1)
        throw new Error(`DataTable: data with _id ${_id} not found`)

    cloneData.splice(index, 1)

    Vue.set(dataTable, 'data', cloneData)

}
