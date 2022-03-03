export function getCV(key) {

    return cv[key] || null

}

export function getLocalStorageCV(key) {

    return cv[key] ? `${cv.LOCAL_STORAGE_PREFIX}.${cv[key]}` : null

}

export const CV = {
    CDN_KEY_LOCAL_STORAGE: 'CDN_KEY_LOCAL_STORAGE',
}

const cv = {
    LOCAL_STORAGE_PREFIX  : 'aur',
    CDN_KEY_LOCAL_STORAGE : 'lastCDN',
}
