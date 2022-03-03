<template>
    <v-btn
        aur-type="primary"
        v-bind="$attrs"
    >
        <slot />
    </v-btn>
</template>

<script>
export default {
    name: 'AurButton',
}
</script>
