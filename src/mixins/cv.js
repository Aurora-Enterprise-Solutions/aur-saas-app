import { CV, getCV, getLocalStorageCV } from '@/static/configuration/cv'

export default {
    data() {

        return {
            CV,
        }

    },

    methods: {
        $getCV             : (key) => getCV(key),
        $getLocalStorageCV : (key) => getLocalStorageCV(key),
    },
}
