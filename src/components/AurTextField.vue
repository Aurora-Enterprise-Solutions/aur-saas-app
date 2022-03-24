<template>
    <v-text-field
        :value="value"
        hide-details="auto"
        outlined
        dense
        v-bind="$attrs"
        @input="$emit('input', $event)"
    >
        <template v-for="(_, slot) in $slots">
            <template :slot="slot">
                <slot :name="slot" />
            </template>
        </template>
    </v-text-field>
</template>

<script>
export default {
    name  : 'AurTextField',
    props : [
        'value',
    ],
}
</script>
