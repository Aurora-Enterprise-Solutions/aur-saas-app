<template>
    <v-container fluid class="aur-page aur-page-login">

        <v-row justify="center">
            <v-card class="aur-page-login-card">

                <v-card-title>
                    <h5 class="aur-card-title">
                        {{ $t('pages.login.title') }}
                    </h5>
                </v-card-title>

                <v-card-text>

                    <v-form ref="LoginForm">
                        <v-row>
                            <v-col :span="12">
                                <v-text-field
                                    v-model="modelForm.email"
                                    :label="$t('pages.login.field.email.label')"
                                    hide-details="auto"
                                    outlined
                                    dense
                                    :rules="rules.email"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :span="12">
                                <v-text-field
                                    v-model="modelForm.password"
                                    :label="$t('pages.login.field.password.label')"
                                    type="password"
                                    hide-details="auto"
                                    outlined
                                    dense
                                    :rules="rules.password"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :span="12">
                                <v-text-field
                                    v-model="modelForm.cdn"
                                    :label="$t('pages.login.field.cdn.label')"
                                    hide-details="auto"
                                    outlined
                                    dense
                                    :rules="rules.cdn"
                                    @keydown="keydown"
                                />
                            </v-col>
                        </v-row>

                        <v-row class="btn-login">
                            <v-col :span="12">
                                <v-btn
                                    aur-type="secondary"
                                    rounded
                                    block
                                    :loading="isLogin"
                                    @click="submit"
                                >
                                    {{ $t('pages.login.button.login') }}
                                </v-btn>
                            </v-col>
                        </v-row>

                        <v-row class="btn-recover">
                            <v-col :span="12">
                                <v-btn
                                    aur-type="secondary"
                                    rounded
                                    block
                                    text
                                    :disabled="isLogin"
                                    @click="recover"
                                >
                                    {{ $t('pages.login.button.recover') }}
                                </v-btn>
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
        }

    },

    beforeMount() {

        if (localStorage.getItem('aur.lastCDN') != null)
            this.modelForm['cdn'] = localStorage.getItem('aur.lastCDN')

    },

    methods: {
        async submit() {

            await this.$refs.form.validate(async(error, values) => {

                if (!error) {

                    this.isLogin = true

                    try {

                        await this.$auth.login( { data: values } )
                        localStorage.setItem('aur.lastCDN', values.cdn.toLowerCase() )

                    }
                    catch (error) {

                        if (error.response) {

                            switch (error.response.status) {

                                case this.$httpStatus.FORBIDDEN: {

                                    this.$notification( {
                                        type    : 'error',
                                        message : this.$t('global.error.INACTIVE_USER'),
                                    } )

                                    break

                                }

                                case this.$httpStatus.UNAUTHORIZED: {

                                    this.$notification( {
                                        type    : 'error',
                                        message : this.$t('global.error.UNKNOWN_USER'),
                                    } )

                                    break

                                }

                                default: {

                                    this.$notification( {
                                        type    : 'error',
                                        message : this.$t('global.error.DEFAULT_ERROR_MESSAGE'),
                                    } )

                                }

                            }

                        }
                        else {

                            this.$notification( {
                                type    : 'error',
                                message : this.$t('global.error.DEFAULT_ERROR_MESSAGE'),
                            } )

                        }

                        this.isLogin = false

                    }

                    this.isLogin = false

                }

            } )

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
