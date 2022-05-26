<template>
    <div class="aur-component aur-component-maintainer-data-table-item-render">

        <template v-if="field.renderType === FIELD_RENDER_TYPE.TEXT">
            {{ field.render ? field.render(item[header.value]) : item[header.value] }}
        </template>

        <template v-else-if="field.renderType === FIELD_RENDER_TYPE.IMAGE">
            <AurMaintainerDataTableItemRenderImage :value="item[header.value]" :field="field" />
        </template>

        <template v-else-if="field.renderType === FIELD_RENDER_TYPE.CUSTOM">
            <v-component
                :is="field.renderOptions.component"
                :item="item" :header="header" :field="field"
            />
        </template>

        <template v-else>
            {{ field.render ? field.render(item[header.value]) : item[header.value] }}
        </template>

    </div>
</template>

<script>
import { FIELD_RENDER_TYPE } from '@@/core/constants/fieldTypes'

export default {
    name  : 'AurMaintainerDataTableItemRender',
    props : {
        header: {
            type    : Object,
            default : () => ( {} ),
        },
        item: {
            type    : Object,
            default : () => ( {} ),
        },
        field: {
            type    : Object,
            default : () => ( {} ),
        },
    },
    data() {

        return {
            FIELD_RENDER_TYPE,
        }

    },
}
</script>
