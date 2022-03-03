<template>
    <v-theme-provider root>
        <v-app class="aur-layout aur-layout-login">
            <div class="aur-logo-wrapper">
                <aur-logo />
            </div>

            <v-main class="aur-content-wrapper">
                <Nuxt />
            </v-main>

            <div class="aur-rigths">
                <span class="aur-caption">{{ $t('global.rigths', { year: new Date().getFullYear() }) }}</span>
            </div>
        </v-app>
    </v-theme-provider>
</template>
