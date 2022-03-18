<template>
    <v-container fluid class="aur-page aur-page-login">

        <v-row justify="center">
            <v-card class="aur-page-login-card">

                <v-card-title>
                    <h4 class="aur-card-title">
                        {{ $t('pages.login.title') }}
                    </h4>
                </v-card-title>

                <v-card-text>

                    <v-form ref="LoginForm">
                        <v-row>
                            <v-col :span="12">
                                <AurTextField
                                    v-model="modelForm.email"
                                    :label="$t('pages.login.field.email.label')"
                                    :rules="rules.email"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :span="12">
                                <AurTextField
                                    v-model="modelForm.password"
                                    :label="$t('pages.login.field.password.label')"
                                    :rules="rules.password"
                                    type="password"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :span="12">
                                <AurTextField
                                    v-model="modelForm.cdn"
                                    :label="$t('pages.login.field.cdn.label')"
                                    :rules="rules.cdn"
                                    @keydown.native="keydown"
                                />
                            </v-col>
                        </v-row>

                        <v-row class="btn-login">
                            <v-col :span="12">
                                <AurButton
                                    aur-type="secondary"
                                    rounded
                                    block
                                    :loading="isLogin"
                                    @click.native="submit"
                                >
                                    {{ $t('pages.login.button.login') }}
                                </AurButton>
                            </v-col>
                        </v-row>

                        <v-row class="btn-recover">
                            <v-col :span="12">
                                <AurButton
                                    aur-type="secondary"
                                    rounded
                                    block
                                    text
                                    :disabled="isLogin"
                                    @click.native="recover"
                                >
                                    {{ $t('pages.login.button.recover') }}
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
    name   : 'Login',
    auth   : 'guest',
    layout : 'login',
    data() {

        return {
            isLogin   : false,
            modelForm : {},
            rules     : {
                email: [
                    v => !!v || this.$t('global.rule.required'),
                ],

                password: [
                    v => !!v || this.$t('global.rule.required'),
                ],

                cdn: [
                    v => !!v || this.$t('global.rule.required'),
                ],
            },

            cdnLocalStorageValue: null,
        }

    },

    beforeMount() {

        this.cdnLocalStorageValue = this.$getLocalStorageCV(this.CV.CDN_KEY_LOCAL_STORAGE)

        if (localStorage.getItem(this.cdnLocalStorageValue) != null)
            this.modelForm['cdn'] = localStorage.getItem(this.cdnLocalStorageValue)

    },

    methods: {
        async submit() {

            if (this.$refs.LoginForm.validate() ) {

                this.isLogin = true

                try {

                    await this.$auth.login( { data: values } )
                    localStorage.setItem(this.cdnLocalStorageValue, values.cdn.toLowerCase() )

                }
                catch (error) {

                    // if (error.response) {

                    //     switch (error.response.status) {

                    //         case this.$httpStatus.FORBIDDEN: {

                    //             this.$notification( {
                    //                 type    : 'error',
                    //                 message : this.$t('global.error.INACTIVE_USER'),
                    //             } )

                    //             break

                    //         }

                    //         case this.$httpStatus.UNAUTHORIZED: {

                    //             this.$notification( {
                    //                 type    : 'error',
                    //                 message : this.$t('global.error.UNKNOWN_USER'),
                    //             } )

                    //             break

                    //         }

                    //         default: {

                    //             this.$notification( {
                    //                 type    : 'error',
                    //                 message : this.$t('global.error.DEFAULT_ERROR_MESSAGE'),
                    //             } )

                    //         }

                    //     }

                    // }
                    // else {

                    //     this.$notification( {
                    //         type    : 'error',
                    //         message : this.$t('global.error.DEFAULT_ERROR_MESSAGE'),
                    //     } )

                    // }

                    // this.isLogin = false

                }

                this.isLogin = false

            }

        },

        async keydown(event) {

            if (event.key === 'Enter')
                await this.submit()

        },

        recover() {

            this.$router.push( { path: '/recover_password' } )

        },
    },
}
</script>
