<template>
    <div ref="root-component" v-resize:debounce="__setTablesHeight" class="aur-component aur-component-maintainer-tables-tabs">
        <v-tabs v-model="tab">
            <v-tab v-for="doctypeForm in __doctypeForms" :key="doctypeForm.name" class="aur-component-maintainer-tab">
                {{ __getDoctypeLabel(doctypeForm.label) }}
            </v-tab>

            <v-tab-item
                v-for="(doctypeForm, index) in __doctypeForms" :key="doctypeForm.name"
                :aur-id="`aur-component-maintainer-tab-${doctypeForm.name}`"
                class="aur-component-maintainer-tab-item"
                eager
                :transition="false"
            >
                <div :ref="`table-${index}`" class="aur-component-maintainer-table-wrapper">
                    <slot :doctypeForm="doctypeForm">
                        <AurMaintainerDataTable :doctype-form="doctypeForm" data-table-wrapper />
                    </slot>
                </div>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import MaintainerMixin from '@/mixins/maintainer'

export default {
    name   : 'AurMaintainerTablesTabs',
    mixins : [ MaintainerMixin ],
    props  : {
        doctype: {
            type    : Object,
            default : () => ( {} ),
        },
    },
    data() {

        return {
            tab: 0,
        }

    },
    methods: {
        findDataTable(childNodes) {

            let dataTableNode = null

            for (let i = 0; i < childNodes.length; i++) {

                const isVueComponent = !!childNodes[i].__vue__

                if (isVueComponent && childNodes[i].__vue__.$attrs.hasOwnProperty('data-table-wrapper') ) {

                    dataTableNode = childNodes[i]

                    break

                }
                else if (childNodes[i].childNodes.length > 0) {

                    dataTableNode = this.findDataTable(childNodes[i].childNodes)
                    if (dataTableNode)
                        break


                }

            }

            return dataTableNode

        },

        onRefreshList() {

            let activeTab = this.$refs[`table-${this.tab}`]
            activeTab = activeTab ? activeTab[0] : null

            if (activeTab) {

                const dataTableNode = this.findDataTable(activeTab.childNodes)

                if (dataTableNode && dataTableNode.__vue__ && dataTableNode.__vue__.hasOwnProperty('__refreshList') )
                    dataTableNode.__vue__.__refreshList()

            }

        },
    },
}
</script>
