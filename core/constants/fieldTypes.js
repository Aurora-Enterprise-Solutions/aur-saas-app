export const FIELD_TYPE = {
    TEXT     : 'TEXT',
    NUMERIC  : 'NUMERIC',
    BOOLEAN  : 'BOOLEAN',
    DATE     : 'DATE',
    DATETIME : 'DATETIME',
    TIME     : 'TIME',
    ARRAY    : 'ARRAY',
    OBJECT   : 'OBJECT',
}

export const FIELD_RENDER_TYPE = {
    TEXT     : 'TEXT',
    TEXTAREA : 'TEXTAREA',
    SELECT   : 'SELECT',
    CHECKBOX : 'CHECKBOX',
    RADIO    : 'RADIO',
    DATE     : 'DATE',
    TIME     : 'TIME',
    FILE     : 'FILE',
    IMAGE    : 'IMAGE',
    PASSWORD : 'PASSWORD',
    NUMERIC  : 'NUMERIC',
    SWITCH   : 'SWITCH',
    CUSTOM   : 'CUSTOM',
}

export const getSafeFieldType = (fieldType) => {

    if (!fieldType || !FIELD_TYPE.hasOwnProperty(fieldType.toUpperCase() ) )
        throw new Error(`Invalid field type: ${fieldType}`)

    return FIELD_TYPE[fieldType.toUpperCase()]

}

export const getSafeFieldRenderType = (fieldType) => {

    if (!fieldType || !FIELD_RENDER_TYPE.hasOwnProperty(fieldType.toUpperCase() ) )
        throw new Error(`Invalid field render type: ${fieldType}`)

    return FIELD_RENDER_TYPE[fieldType.toUpperCase()]

}
