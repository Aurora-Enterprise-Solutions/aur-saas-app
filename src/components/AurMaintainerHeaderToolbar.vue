<template>
    <v-toolbar class="aur-component aur-component-maintainer-header-toolbar" elevation="0">
        <v-toolbar-title class="aur-maintainer-header-title mr-3">
            {{ sectionTitle }}
        </v-toolbar-title>

        <slot name="add-button">
            <AurButton text class="aur-component-maintainer-header-toolbar__add-registry-button ml-2">
                <i class="ri-add-box-fill" /> {{ $t('components.maintainer_header_toolbar.button_add', { doctypeLabel: __doctypeLabel }) }}
            </AurButton>
        </slot>

        <slot name="refresh-list-button">
            <AurButton text class="aur-component-maintainer-header-toolbar__refresh-button ml-2" @click.native="onRefresh">
                <i class="ri-refresh-line" /> {{ $t('components.maintainer_header_toolbar.button_refresh') }}
            </AurButton>
        </slot>

        <slot name="action-buttons" />
    </v-toolbar>
</template>

<script>
import voca from 'voca'
import { mapGetters } from 'vuex'
import MaintainerMixin from '@/mixins/maintainer'

export default {
    name   : 'AurMaintainerHeaderToolbar',
    mixins : [ MaintainerMixin ],
    props  : {
        doctype: {
            type    : Object,
            default : () => ( {} ),
        },
    },
    computed: {
        ...mapGetters( {
            sectionTitle: 'navbar/sectionTitle',
        } ),
    },
    methods: {
        onRefresh() {

            this.$emit('refreshList')

        },
    },
}
</script>
