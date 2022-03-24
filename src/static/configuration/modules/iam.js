import { ModuleConfig, ModuleLinkConfig } from "./utils"

export const moduleConfig = new ModuleConfig( {
    key   : 'IAM',
    title : {
        es : 'Gestión de Identidades y Accesos (IAM)',
        en : 'Identity and Access Management (IAM)',
    },

    description: {
        es : 'Administración de usuarios y permisos asociados',
        en : '',
    },

    to     : '',
    enable : true,
    links  : [
        new ModuleLinkConfig( {
            label: {
                es : 'Mantenedor de usuarios',
                en : '',
            },
            to: '/maintainer/users',
        } ),
        // new ModuleLinkConfig( {
        //     label: {
        //         es : 'Mantenedor de roles',
        //         en : '',
        //     },
        //     to: '/maintainer/users',
        // } ),
        // new ModuleLinkConfig( {
        //     label: {
        //         es : 'Mantenedor de grupos',
        //         en : '',
        //     },
        //     to: '/maintainer/users',
        // } ),
        // new ModuleLinkConfig( {
        //     label: {
        //         es : 'Permisos condicionales',
        //         en : '',
        //     },
        //     to: '/maintainer/users',
        // } ),
        // new ModuleLinkConfig( {
        //     label: {
        //         es : 'Auditoría para usuarios',
        //         en : '',
        //     },
        //     to: '/maintainer/users',
        // } ),
    ],
} )
