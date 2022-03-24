export const actions = {
    /**
     * Get server response codes
     */
    async init( { dispatch } ) {

        await dispatch('company/init', {
            id      : '1',
            name    : 'Aurora Enterprise Solutions',
            logoUri : 'https://drive.google.com/u/0/uc?id=1Z2MHV89NrJWYTfLNYhMj0qTXrj9CdCK7&export=download',
            cdn     : 'aur.aurora.cl',
        }, { root: true } )

        await dispatch('user/init', {
            id       : '1',
            name     : 'Jesus',
            lastName : 'Barrientos',
            avatar   : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpINRxilsxu9AldotOSirz-KeZEQrczDwATFWDpwlHTFzSMgTxmIpOLZXy6zvzd940nyQIA6WbyPdp9AniiVS8_OOZZLiOkKfJ1Q&usqp=CAU&ec=45707744',
            role     : 'administrator',
            roleName : 'Administrador',
            email    : 'jesus.barrientos@aurora-enterprise.com',
        }, { root: true } )

        await dispatch('notifications/init', {
            notifications: [],
        }, { root: true } )

    },
}
