<template>
    <div class="aur-component aur-component-maintainer-data-table">
        <v-data-table
            :headers="__headers"
            :items="__source"
            :items-per-page="doctypeForm.itemsPerPage || 10"
            :dense="doctypeForm.dense"
            :loading="__loading"
            :loading-text="$t('components.maintainer_data_table.loading_text')"
            fixed-header
        >

            <template v-for="header in __headers" #[`item.${header.value}`]="{ item }">
                <AurMaintainerDataTableItemRender
                    v-if="header.value !== '__actions'"
                    :key="header.value" :header="header" :item="item"
                    :field="getField(header.value)"
                />

                <AurMaintainerDataTableItemActions
                    v-else
                    :key="header.value" :header="header" :item="item"
                    :field="getField(header.value)"
                    @edit="__edit(item)"
                    @delete="__delete(item)"
                />
            </template>

        </v-data-table>
    </div>
</template>

<script>
import DataTableCrudMixin from '@/mixins/data-table-crud'

export default {
    name    : 'AurMaintainerDataTable',
    mixins  : [ DataTableCrudMixin ],
    methods : {
        getField(name) {

            return this.doctypeForm.fields.find(field => field.name === name)

        },
    },
}
</script>
