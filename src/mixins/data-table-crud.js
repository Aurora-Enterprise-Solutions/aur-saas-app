import MaintainerMixin from './maintainer'

export default {
    mixins: [ MaintainerMixin ],

    props: {
        doctypeForm: {
            type     : Object,
            required : true,
        },
    },

    beforeMount() {

        this.$__initDataTableInStore()

    },

    beforeDestroy() {

        this.$__removeDataTableInStore()

    },

    computed: {
        __source() {

            return this.$store.getters['data-table/getDataTableSource'](this._uid)

        },

        __headers() {

            const headers = this.doctypeForm.fields.map(field => {

                return {
                    text       : this.__getDoctypeLabel(field.label),
                    value      : field.name,
                    align      : field.align || 'start',
                    sortable   : field.sortable || false,
                    filterable : field.filterable || false,
                    groupable  : field.groupable || false,
                    divider    : field.divider || false,
                    class      : field.class || [],
                    cellClass  : field.cellClass || [],
                    width      : field.width || '',
                    filter     : field.filter, // (value: any, search: string, item: any) => boolean
                    sort       : field.sort, // (a: any, b: any) => number
                }

            } )

            // show actions header
            if (this.doctypeForm.allowedCrudOperations.update || this.doctypeForm.allowedCrudOperations.delete) {

                headers.push( {
                    text       : this.$t('components.maintainer_data_table_action_header.title'),
                    value      : '__actions',
                    align      : 'center',
                    sortable   : false,
                    filterable : false,
                    groupable  : false,
                    divider    : false,
                    class      : [ 'aur-maintainer-data-table__action-header' ],
                    cellClass  : [],
                    width      : 'auto',
                    filter     : () => true,
                    sort       : () => 0,
                } )

            }

            return headers

        },

        __loading() {

            return this.$store.getters['data-table/loading'](this._uid)

        },
    },

    methods: {
        $__initDataTableInStore() {

            this.$store.dispatch('data-table/setDataTable', {
                uid      : this._uid,
                crudUrls : this.doctypeForm.crudUrls,
            } )

        },

        $__removeDataTableInStore() {

            this.$store.dispatch('data-table/removeDataTable', {
                uid: this._uid,
            } )

        },

        __setCrudUrls(crudUrls) {

            this.$store.dispatch('data-table/setDataTableAttr', {
                uid: this._uid,
                crudUrls,
            } )

        },

        __refreshList() {

            this.$store.dispatch('data-table/fetchDataTable', {
                uid: this._uid,
            } )

        },

        __edit(item) {

            this.$store.dispatch('data-table/editRegistry', {
                uid: this._uid,
                item,
            } )

        },

        __delete(item) {

            this.$store.dispatch('data-table/deleteRegistry', {
                uid: this._uid,
                item,
            } )

        },
    },
}
