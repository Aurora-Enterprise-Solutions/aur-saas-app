<template>
    <div
        class="aur-component aur-component-active-status" :class="{
            'aur-component-active-status--active' : value === 'active',
            'aur-component-active-status--inactive': value === 'inactive',
        }"
    >
        <AurDot />
        {{ field.render ? field.render(item[header.value]) : item[header.value] }}
    </div>
</template>

<script>
import CustomDataTableItemRenderMixin from '@/mixins/custom-data-table-item-component'

export default {
    name     : 'AurActiveStatus',
    mixins   : [ CustomDataTableItemRenderMixin ],
    computed : {
        value: function () {

            return this.item[this.header.value]

        },
    },
}
</script>
