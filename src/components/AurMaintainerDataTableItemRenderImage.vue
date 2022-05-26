<template>
    <div
        class="aur-component aur-component-maintainer-data-table-item-render-image"
        :style="{
            display: 'inline-flex',
            padding: '4px 0'
        }"
    >
        <img v-if="value" :src="value" :style="styles">
        <div v-else :style="styles" />
    </div>
</template>

<script>
export default {
    name  : 'AurMaintainerDataTableItemRenderImage',
    props : {
        value: {
            type    : String,
            default : '',
        },
        field: {
            type    : Object,
            default : () => ( {} ),
        },
    },
    computed: {
        styles: function() {

            return {
                width        : this.field.renderOptions.width,
                height       : this.field.renderOptions.height,
                borderRadius : this.field.renderOptions.radius,
            }

        },
    },
}
</script>
