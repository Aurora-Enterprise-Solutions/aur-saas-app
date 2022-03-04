<template>
    <v-container class="aur-page aur-page-recover-password">

        <v-row justify="center">

            <v-card class="aur-page-recover-password-card">

                <v-card-title>
                    <h4 class="aur-card-title">
                        {{ $t('pages.recover_password.title') }}
                    </h4>
                </v-card-title>

                <v-card-text>

                    <v-form ref="form">

                        <v-row>
                            <v-col :cols="12">
                                <p class="text-justify no-margin">
                                    {{ $t('pages.recover_password.info') }}
                                </p>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :cols="12">
                                <AurTextField
                                    v-model="modelForm.email"
                                    :label="$t('pages.recover_password.field.email.label')"
                                    :rules="rules.email"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :cols="12">
                                <AurTextField
                                    v-model="modelForm.cdn"
                                    :label="$t('pages.recover_password.field.cdn.label')"
                                    :rules="rules.cdn"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :cols="12">
                                <AurButton
                                    aur-type="secondary"
                                    rounded
                                    block
                                    :disabled="isGettingCode"
                                    @click.native="submit"
                                >
                                    {{ buttonCount || $t('pages.recover_password.button.send') }}
                                </AurButton>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :cols="12">
                                <AurButton
                                    aur-type="secondary"
                                    rounded
                                    block
                                    text
                                    :disabled="isGettingCode"
                                    @click.native="backToLogin"
                                >
                                    {{ $t('pages.recover_password.button.back') }}
                                </AurButton>
                            </v-col>
                        </v-row>

                    </v-form>

                </v-card-text>

            </v-card>

        </v-row>
    </v-container>
</template>

<script>

export default {
    layout : 'login',
    auth   : 'guest',
    data() {

        return {
            isGettingCode : false,
            buttonCount   : 0,
            modelForm     : {},
            rules         : {
                email: [
                    v => !!v || this.$t('global.rule.required'),
                    this.$validateEmail,
                ],

                cdn: [
                    v => !!v || this.$t('global.rule.required'),
                ],
            },
        }

    },

    beforeMount() {

        this.cdnLocalStorageValue = this.$getLocalStorageCV(this.$CV.CDN_KEY_LOCAL_STORAGE)

        if (localStorage.getItem(this.cdnLocalStorageValue) != null)
            this.modelForm['cdn'] = localStorage.getItem(this.cdnLocalStorageValue)

    },

    beforeDestroy() {

        this.clearRegresiveCount()

    },

    methods: {
        submit() {

            if (this.$refs.form.validate() )

                this.setRegresiveCount()

            // this.$store.dispatch('authentication/sendCode', values)
            //     .then(async() => {

            //         await this.$router.push( { path: `/recover_password/${values.email.toLowerCase()}/${values.cdn.toLowerCase()}` } )

            //     } ).catch(async(error) => {

            //         switch (error.__typename) {

            //             case GQL_TYPE.USER.NOT_FOUND: {

            //                 await this.$notification( {
            //                     type    : 'error',
            //                     message : this.$t('global.error.USER_NOT_FOUND'),
            //                 } )

            //                 break

            //             }

            //             case GQL_TYPE.USER.INACTIVE: {

            //                 await this.$notification( {
            //                     type    : 'error',
            //                     message : this.$t('global.error.INACTIVE_USER'),
            //                 } )

            //                 break

            //             }

            //             default: {

            //                 await this.$notification( {
            //                     type    : 'error',
            //                     message : this.$t('global.error.CANNOT_GENERATE_CODE'),
            //                 } )

            //             }

            //         }

            //         this.clearRegresiveCount()

            //     } )

        },

        async toConfirm() {

            if (this.$refs.form.validate() ) {

                this.isGettingCode = true
                await this.$router.push( { path: `/recover_password/confirm/${this.modelForm.username.toLowerCase()}/${this.modelForm.cdn.toLowerCase()}` } )

            }

        },

        backToLogin() {

            this.$router.push( { path: '/login' } )

        },

        setRegresiveCount() {

            this.isGettingCode = true
            this.buttonCount = 30
            this.buttonCountInterval = setInterval( () => {

                this.buttonCount--
                if (this.buttonCount === 0)
                    this.clearRegresiveCount()

            }, 1000)

        },

        clearRegresiveCount() {

            clearInterval(this.buttonCountInterval)
            this.buttonCount = 0
            this.isGettingCode = false

        },
    },
}
</script>
