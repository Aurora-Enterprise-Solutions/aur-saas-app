<template>
    <div class="aur-component aur-component-maintainer-data-table-item-actions">
        <v-row justify="center" align="center">

            <v-col v-if="showDeleteAction" cols="auto" class="pa-0">
                <AurButton x-small aur-type="error" @click="$emit('delete')">
                    {{ $t('components.maintainer_data_table_action_header.delete_confirm') }}
                </AurButton>

                <AurButton x-small text @click="showDeleteAction = false">
                    {{ $t('components.maintainer_data_table_action_header.delete_cancel') }}
                </AurButton>
            </v-col>

            <v-col cols="auto" class="pa-0">
                <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                        <AurButton
                            icon
                            v-bind="attrs"
                            v-on="on"
                            @click="$emit('edit')"
                        >
                            <i class="ri-edit-fill" />
                        </AurButton>
                    </template>
                    <span>{{ $t('components.maintainer_data_table_action_header.update_tooltip') }}</span>
                </v-tooltip>
            </v-col>

            <v-col cols="auto" class="pa-0">
                <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                        <AurButton
                            icon
                            v-bind="attrs"
                            v-on="on"
                            @click="showDeleteAction = true"
                        >
                            <i class="ri-delete-bin-7-fill" />
                        </AurButton>
                    </template>
                    <span>{{ $t('components.maintainer_data_table_action_header.delete_tooltip') }}</span>
                </v-tooltip>
            </v-col>

        </v-row>
    </div>
</template>

<script>
export default {
    name: 'AurMaintainerDataTableItemActions',
    data() {

        return {
            showDeleteAction: false,
        }

    },
}
</script>
