import { CV, getCV, getLocalStorageCV } from '@/static/configuration/cv'

export default {
    computed: {
        $CV: () => CV,
    },

    methods: {
        $getCV             : (key) => getCV(key),
        $getLocalStorageCV : (key) => getLocalStorageCV(key),
    },
}
