export const actions = {
    /**
     * Initialize the application
     */
    async nuxtServerInit( { dispatch } ) {

        await dispatch('core/init')

    },
}
