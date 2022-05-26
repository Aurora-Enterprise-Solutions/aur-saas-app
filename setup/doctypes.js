// Doctypes
import { doctype as userDoctype } from './doctypes/user/index'

export const doctypes = (app) => {

    // Doctypes: constants
    const _userDoctype = userDoctype.bind(app)

    return {
        user: _userDoctype,
    }

}
