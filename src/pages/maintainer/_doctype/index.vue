<template>
    <div class="aur-page aur-page-maintainer aur-fluid-page">
        <client-only>
            <AurMaintainerHeaderToolbar :doctype="doctype" @refreshList="onRefreshList" />
            <AurMaintainerTablesTabs ref="tablesTabs" :doctype="doctype" />
        </client-only>
    </div>
</template>

<script>
import { doctypes } from '@@/setup/doctypes'

export default {
    data() {

        return {
            doctype: null,
        }

    },
    computed: {
        doctypeMaintainerLabel() {

            return this.doctype && this.doctype.maintainerLabel ? this.doctype.maintainerLabel[this.$i18n.locale] || this.doctype.maintainerLabel[this.$i18n.fallbackLocale] : ''

        },
    },
    created() {

        this.doctypes = doctypes(this)

    },
    beforeMount() {

        this.doctype = this.doctypes[this.$route.params.doctype]() || null

        if (this.doctype === null)
            this.$router.push('/404')

        this.__setupNavbar( {
            sectionTitle    : this.doctypeMaintainerLabel,
            showSearchInput : false,
        } )

    },
    methods: {
        onRefreshList() {

            this.$refs.tablesTabs.onRefreshList()

        },
    },
}
</script>
