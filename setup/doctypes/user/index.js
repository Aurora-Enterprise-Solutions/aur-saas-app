import { Doctype } from "./../../../core/classes/doctype"
import { FIELD_TYPE, FIELD_RENDER_TYPE } from "./../../../core/constants/fieldTypes"
import { USER_STATE_LABEL_I18N_PATH } from "./types"

export function doctype() {

    return new Doctype( {
        name  : 'user',
        label : {
            es : 'Usuario',
            en : 'User',
        },
        maintainerLabel: {
            es : 'Mantenedor de Usuarios',
            en : 'User maintainer',
        },

        forms: [
            {
                name  : 'primary',
                label : {
                    es : 'Datos Generales',
                    en : 'General Data',
                },
                recordKey             : '_id',
                foreignerKey          : null,
                formForeigner         : null,
                itemsPerPage          : 10,
                dense                 : true,
                allowedCrudOperations : {
                    create     : true,
                    update     : true,
                    delete     : true,
                    deleteMany : true,
                },
                crudUrls: {
                    list   : '/users',
                    create : '/users',
                    update : '/users',
                    delete : '/users',
                },
                fields: [
                    {
                        name  : 'avatar',
                        label : {
                            es : 'Imagen',
                            en : 'Avatar',
                        },
                        type          : FIELD_TYPE.TEXT,
                        renderType    : FIELD_RENDER_TYPE.IMAGE,
                        renderOptions : {
                            isAvatar: true,
                        },
                        required      : false,
                        rules         : [],
                        caseSensitive : false,
                        defaultValue  : null,
                        align         : 'center',
                        width         : '150px',
                    },
                    {
                        name  : 'username',
                        label : {
                            es : 'Nombre de usuario',
                            en : 'Username',
                        },
                        type       : FIELD_TYPE.TEXT,
                        renderType : FIELD_RENDER_TYPE.TEXT,
                        required   : true,
                        rules      : [
                            v => !!v || this.$t('global.rule.required'),
                        ],
                        caseSensitive : false,
                        defaultValue  : null,
                        filter        : () => {

                            return true

                        },
                    },
                    {
                        name  : 'state',
                        label : {
                            es : 'Estado',
                            en : 'State',
                        },
                        type          : FIELD_TYPE.BOOLEAN,
                        renderType    : FIELD_RENDER_TYPE.CUSTOM,
                        renderOptions : {
                            component: 'AurActiveStatus',
                        },
                        required : true,
                        rules    : [
                            v => !!v || this.$t('global.rule.required'),
                        ],
                        render        : (state) => this.$t(USER_STATE_LABEL_I18N_PATH[state] ) || state.toString().trim(),
                        caseSensitive : false,
                        defaultValue  : true,
                    },
                ],
            },
            {
                name  : 'primary2',
                label : {
                    es : 'Detalles',
                    en : 'Details',
                },
                recordKey     : '_id',
                foreignerKey  : null,
                formForeigner : null,
                itemsPerPage  : 10,
                dense         : true,
                fields        : [
                    {
                        name  : 'username',
                        label : {
                            es : 'Nombre de usuario',
                            en : 'Username',
                        },
                        type       : FIELD_TYPE.TEXT,
                        renderType : FIELD_RENDER_TYPE.TEXT,
                        rules      : [
                            v => !!v || this.$t('global.rule.required'),
                        ],
                    },
                    {
                        name  : 'state',
                        label : {
                            es : 'Estado',
                            en : 'State',
                        },
                        type       : FIELD_TYPE.TEXT,
                        renderType : FIELD_RENDER_TYPE.TEXT,
                        rules      : [
                            v => !!v || this.$t('global.rule.required'),
                        ],
                        render: (state) => this.$t(USER_STATE_LABEL_I18N_PATH[state] ) || state.toString().trim(),
                    },
                ],
            },
        ],
    } )

}
