<template>
    <v-container fluid class="aur-page aur-page-modules">
        <div class="aur-module-list">
            <client-only>
                <div
                    v-masonry
                    transition-duration="0.1s"
                    column-width=".module-item"
                    item-selector=".module-item"
                    class="masonry-container"
                    :fit-width="true"
                >
                    <AurModuleCard
                        v-for="(module, index) in modules"
                        :key="index"
                        v-masonry-tile
                        v-bind="module"
                        class="module-item"
                        @collapse="onCollapse"
                    />
                </div>
            </client-only>
        </div>

        <v-row class="aur-version" justify="end">
            <AurVersion />
        </v-row>
    </v-container>
</template>

<script>
import voca from 'voca'
import NavbarSetupMixin from '@/mixins/navbar-setup'
import { modules } from '@/static/configuration/modules.js'

const Modules = modules.filter( (module) => module.enable).reverse()

export default {
    name   : 'Modules',
    mixins : [ NavbarSetupMixin ],

    data() {

        return {
            filteredModules: Modules,
        }

    },

    computed: {
        modules() {

            return this.filteredModules

        },
    },

    beforeMount() {

        this.__setupNavbar( {
            sectionTitle    : this.$t('pages.modules.title'),
            showSearchInput : true,
            onSearch        : this.onSearch,
        } )

    },

    mounted () {

        if (typeof this.$redrawVueMasonry === 'function')
            this.$redrawVueMasonry()


    },

    methods: {
        onSearch(text) {

            if (!voca.isEmpty(text) ) {

                this.filteredModules = Modules.filter( (module) => {

                    const title = module.title[this.$i18n.locale] || module.title[this.$i18n.fallbackLocale]

                    return module.enable && (voca.matches(title, text, 'i') || this.linkContainsText(module, text) )

                } )

            }
            else { this.filteredModules = Modules.filter( (module) => module.enable) }

        },

        linkContainsText(module, text) {

            let contains = false

            if (module['links'] && module['links'].length > 0) {

                for (let i = 0; i < module['links'].length; i++) {

                    const label = module['links'][i].label[this.$i18n.locale] || module['links'][i].label[this.$i18n.fallbackLocale]

                    if (voca.matches(label, text, 'i') ) {

                        contains = true

                        break

                    }

                }

            }

            return contains

        },

        onCollapse() {

            const interval = setInterval( () => {

                this.$redrawVueMasonry()

            }, 1)

            setTimeout( () => {

                clearInterval(interval)

            }, 710)

        },
    },
}
</script>
