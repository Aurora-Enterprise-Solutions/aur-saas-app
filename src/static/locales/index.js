// Vuetify
import v_es from 'vuetify/es5/locale/es'
import v_en from 'vuetify/es5/locale/en'

// Aurora SaaS
import es from './es.js'
import en from './en.json'

export default {
    es: {
        $vuetify: v_es,
        ...es,
    },
    en: {
        $vuetify: v_en,
        ...en,
    },
}
