<template>
    <v-avatar class="aur-component aur-component-avatar">
        <img
            v-if="!!src" :src="src" :alt="alt"
            class="img-avatar"
        >

        <div v-else class="img-initials">
            <h5 class="aur-white-text">
                {{ initials }}
            </h5>
        </div>
    </v-avatar>
</template>

<script>
export default {
    name  : 'AurAvatar',
    props : {
        src: {
            type    : String,
            default : '',
        },
        initials: {
            type    : String,
            default : '',
        },
        alt: {
            type    : String,
            default : '',
        },
    },
}
</script>
