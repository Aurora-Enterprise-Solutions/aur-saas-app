<template>
    <v-btn
        aur-type="primary"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot />
    </v-btn>
</template>

<script>
export default {
    name: 'AurButton',
}
</script>
