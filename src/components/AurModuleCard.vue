<template>
    <div class="aur-component aur-component-module-card">
        <v-expansion-panels v-model="panel" @change="onChange">
            <v-expansion-panel>

                <v-expansion-panel-header>
                    <div class="card-title" @click.stop="goToModule">
                        <h5>
                            {{ localeTitle }}
                        </h5>
                        <p class="aur-caption">
                            {{ localeDescription }}
                        </p>
                    </div>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                    <div class="link-container">
                        <nuxt-link v-for="(link, index) in links" :key="index" :to="link.to">
                            {{ localeLinkLabel(link.label) }}
                        </nuxt-link>
                    </div>
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    name  : 'AurModuleCard',
    props : {
        title: {
            type     : Object,
            required : true,
        },
        description: {
            type     : Object,
            required : false,
            default  : undefined,
        },
        to: {
            type     : String,
            required : false,
            default  : undefined,
        },
        links: {
            type     : Array,
            required : false,
            default  : () => [],
        },
    },

    data() {

        return {
            panel: 0,
        }

    },

    computed: {
        localeTitle() {

            return this.title[this.$i18n.locale] || this.title[this.$i18n.fallbackLocale]

        },
        localeDescription() {

            return this.description ? (this.description[this.$i18n.locale] || this.description[this.$i18n.fallbackLocale] ) : undefined

        },
    },
    methods: {
        goToModule() {

            if (this.to) {

                this.$router.push( {
                    path: this.to,
                } )

            }

        },
        localeLinkLabel(label) {

            return label[this.$i18n.locale] || label[this.$i18n.fallbackLocale]

        },
        onChange() {

            this.$emit('collapse')

        },
    },
}
</script>
