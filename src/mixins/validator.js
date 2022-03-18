import validator from 'validator'

export default {
    methods: {
        $validateEmail(email) {

            if (!email || !validator.isEmail(email) )
                return this.$t('global.rule.no_email')

            return true

        },

        $validateCode(code) {

            if (!code || !validator.isLength(code, { min: 6, max: 6 } ) )
                return this.$t('global.rule.code_length')

            return true

        },

        $validatePassword(password) {

            const passwordCriterias = { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0 }

            if (!password || !validator.isStrongPassword(password, passwordCriterias) )
                return this.$t('global.rule.password.error')

            return true

        },

        $validateConfirmPassword(newPassword, confirmPassword) {

            return (newPassword !== confirmPassword) ? this.$t('global.rule.equal_password') : true

        },
    },
}
