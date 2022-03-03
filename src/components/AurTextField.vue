<template>
    <v-text-field
        :value="value"
        hide-details="auto"
        outlined
        dense
        v-bind="$attrs"
        @input="$emit('input', $event)"
    />
</template>

<script>
export default {
    name  : 'AurTextField',
    props : [
        'value',
    ],
}
</script>
