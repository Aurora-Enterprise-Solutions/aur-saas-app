<template>
    <v-theme-provider root>
        <v-app class="aur-layout aur-layout-default">
            <AurNavbar />

            <v-main class="aur-content-wrapper">
                <Nuxt />
                <AurNavigationDrawer ref="aur-module-navigation" />
            </v-main>
        </v-app>
    </v-theme-provider>
</template>

<script>

export default {
    data() {

        return {
            navbar: {
                showSearchInput : true,
                user            : {
                    name           : 'jesús',
                    secondName     : 'Alberto',
                    lastName       : 'barrientos',
                    secondLastName : 'gonzález',
                    degree         : 'consulting analyst',
                    avatar         : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpINRxilsxu9AldotOSirz-KeZEQrczDwATFWDpwlHTFzSMgTxmIpOLZXy6zvzd940nyQIA6WbyPdp9AniiVS8_OOZZLiOkKfJ1Q&usqp=CAU&ec=45707744',
                    notification   : 100,
                },

                org: {
                    // logo: 'https://pbs.twimg.com/profile_images/1280170112386052098/hIzck93__400x400.png'
                },
            },
        }

    },
}
</script>
