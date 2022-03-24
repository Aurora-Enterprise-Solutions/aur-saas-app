<template>
    <v-app-bar
        class="aur-component aur-component-navbar"
        app
        clipped-left
        scroll-target=".aur-layout"
        elevation="0"
    >
        <v-app-bar-nav-icon @click="toggleNavigationModules" />

        <img :src="companyLogo" alt="company-logo" class="aur-company-logo">
        <h5 class="aur-company-name">
            {{ companyName }}
        </h5>

        <v-spacer />

        <AurTextField :value="searchValue" :placeholder="$t('components.navbar.search.placeholder')" @input="onSearchChange">
            <template #append>
                <i class="ri-search-2-line" />
            </template>
        </AurTextField>

        <v-spacer />

        <div class="aur-user-wrapper">
            <span class="aur-user-name">{{ userFullName }}</span>
            <span class="aur-user-role aur-caption aur-highlight">{{ userRoleName.toUpperCase() }}</span>
        </div>
        <AurAvatar
            :initials="userNameInitials" :src="userAvatar" alt="user-avatar"
            class="aur-user-avatar"
        />


        <AurButton icon>
            <v-badge
                color="error"
                dot
                :value="!!notificationsCount"
            >
                <i class="ri-notification-4-fill" />
            </v-badge>
        </AurButton>

        <AurButton icon>
            <i class="ri-more-2-fill" />
        </AurButton>

    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name     : 'AurNavbar',
    computed : {
        ...mapGetters( {
            searchVisibility   : 'navbar/searchVisible',
            searchValue        : 'navbar/searchValue',
            companyName        : 'company/name',
            companyLogo        : 'company/logoUri',
            userFullName       : 'user/fullName',
            userAvatar         : 'user/avatar',
            userRoleName       : 'user/roleName',
            userNameInitials   : 'user/nameInitials',
            notificationsCount : 'notifications/count',
        } ),
    },
    methods: {
        toggleNavigationModules() {

            this.$store.dispatch('navigation-modules/toggle')

        },

        onSearchChange(value) {

            this.$store.dispatch('navbar/setSearchValue', value)

        },
    },
}
</script>
