import { Module, ModuleLink } from "/core/classes/module"

export const moduleConfig = new Module( {
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
        new ModuleLink( {
            label: {
                es : 'Mantenedor de usuarios',
                en : '',
            },
            to: '/maintainer/user',
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
