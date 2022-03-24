<template>
    <v-navigation-drawer
        :value="visible"
        class="aur-component aur-component-navigation-drawer"
        absolute
        clipped
        floating
        temporary
        @input="setNavigationModulesVisibility"
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list
            dense
            nav
        >
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name     : 'AurNavigationDrawer',
    computed : {
        ...mapGetters( {
            visible: 'navigation-modules/visible',
        } ),
        items() {

            return [
                {
                    title : 'Home',
                    icon  : 'mdi-home',
                },
                {
                    title : 'About',
                    icon  : 'mdi-information',
                },
                {
                    title : 'Contact',
                    icon  : 'mdi-email',
                },
            ]

        },
    },
    methods: {
        setNavigationModulesVisibility(value) {

            value ? this.$store.commit('navigation-modules/show') : this.$store.commit('navigation-modules/hide')

        },
    },
}
</script>
