<template>
    <v-container class="aur-page aur-page-recover-password-confirm">

        <v-row justify="center">

            <v-card class="aur-page-recover-password-confirm-card">

                <v-card-title>
                    <h4 class="aur-card-title">
                        {{ $t('pages.recover_password_confirm.title') }}
                    </h4>
                </v-card-title>

                <v-card-text>

                    <v-form ref="form">

                        <v-row>
                            <v-col :cols="12">
                                <p class="text-justify no-margin">
                                    {{ $t('pages.recover_password_confirm.info', { email }) }}
                                </p>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :cols="12">
                                <AurTextField
                                    v-model="modelForm.code"
                                    :label="$t('pages.recover_password_confirm.field.code.label')"
                                    :rules="rules.code"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :cols="12">
                                <AurTextField
                                    v-model="modelForm.newPassword"
                                    :label="$t('pages.recover_password_confirm.field.password.label')"
                                    :rules="rules.newPassword"
                                    type="password"
                                />
                                <div class="aur-help">
                                    <span>{{ $t('global.rule.password.help_1_1') }}</span>
                                    <ul>
                                        <li>{{ $t('global.rule.password.help_1_2') }}</li>
                                        <li>{{ $t('global.rule.password.help_1_3') }}</li>
                                        <li>{{ $t('global.rule.password.help_1_4') }}</li>
                                        <li>{{ $t('global.rule.password.help_1_5') }}</li>
                                    </ul>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :cols="12">
                                <AurTextField
                                    v-model="modelForm.confirmPassword"
                                    :label="$t('pages.recover_password_confirm.field.confirmPassword.label')"
                                    :rules="rules.confirmPassword"
                                    type="password"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :cols="12">
                                <AurButton
                                    aur-type="secondary"
                                    rounded
                                    block
                                    :loading="isChangingPassword"
                                    @click.native="submit"
                                >
                                    {{ $t('pages.recover_password_confirm.button.send') }}
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
                                    :disabled="isChangingPassword"
                                    @click.native="backToLogin"
                                >
                                    {{ $t('pages.recover_password_confirm.button.back') }}
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
    name   : 'RecoverPasswordConfirm',
    auth   : 'guest',
    layout : 'login',
    data() {

        return {
            isChangingPassword : false,
            modelForm          : {},
            email              : undefined,
            rules              : {
                code: [
                    v => !!v || this.$t('global.rule.required'),
                    this.$validateCode,
                ],

                newPassword: [
                    v => !!v || this.$t('global.rule.required'),
                    this.$validatePassword,
                ],

                confirmPassword: [
                    v => !!v || this.$t('global.rule.required'),
                    this.validateConfirmPassword,
                ],
            },
        }

    },

    methods: {
        async submit() {

            // await this.$refs.form.validate(async(error, values) => {

            //     if (!error) {

            //         this.isChangingPassword = true

            //         await this.$store.dispatch('authentication/changePassword', { ...values, ...this.$route.params } )
            //             .then(async() => {

            //                 await this.$notification( {
            //                     type    : 'success',
            //                     message : this.$t('global.message.PASSWORD_CHANGED'),
            //                 } )
            //                 this.$router.push( { path: '/' } )
            //                 this.isChangingPassword = false

            //             } ).catch(async(error) => {

            //                 switch (error.__typename) {

            //                     case GQL_TYPE.USER.NOT_FOUND: {

            //                         await this.$notification( {
            //                             type    : 'error',
            //                             message : this.$t('global.error.USER_NOT_FOUND'),
            //                         } )

            //                         break

            //                     }

            //                     case GQL_TYPE.USER.INACTIVE: {

            //                         await this.$notification( {
            //                             type    : 'error',
            //                             message : this.$t('global.error.INACTIVE_USER'),
            //                         } )

            //                         break

            //                     }

            //                     case GQL_TYPE.TOKEN.NOT_FOUND: {

            //                         await this.$notification( {
            //                             type    : 'error',
            //                             message : this.$t('global.error.UNKNOWN_CODE'),
            //                         } )

            //                         break

            //                     }

            //                     case GQL_TYPE.AUTH.INVALID_CHANGE_PASS_CODE: {

            //                         await this.$notification( {
            //                             type    : 'error',
            //                             message : this.$t('global.error.UNKNOWN_CODE'),
            //                         } )

            //                         break

            //                     }

            //                     default: {

            //                         await this.$notification( {
            //                             type    : 'error',
            //                             message : this.$t('global.error.CANNOT_CHANGE_PASSWORD'),
            //                         } )

            //                     }

            //                 }

            //                 this.isChangingPassword = false

            //             } )

            //     }

            // } )

        },

        backToLogin() {

            this.$router.push( { path: '/login' } )

        },

        validateConfirmPassword(value) {

            return this.$validateConfirmPassword(this.modelForm.newPassword, value)

        },
    },
}
</script>
