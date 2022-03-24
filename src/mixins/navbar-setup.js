export default {
    methods: {
        __setupNavbar( { sectionTitle, showSearchInput, onSearch } ) {

            this.$store.dispatch('navbar/resetSearch')

            this.$store.commit('navbar/setSearchChangeEvent', onSearch)
            this.$store.commit('navbar/setSectionTitle', sectionTitle)
            showSearchInput ? this.$store.dispatch('navbar/showSearch') : this.$store.dispatch('navbar/hideSearch')

        },
    },
}
