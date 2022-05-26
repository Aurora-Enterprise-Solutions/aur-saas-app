import { Module, ModuleLink } from "/core/classes/module"

export const moduleConfig = new Module( {
    key   : 'PURCHASES',
    title : {
        es : 'Compras',
        en : 'Purchases',
    },

    description: {
        es : 'Aprovisionamiento de artículos o materias primas',
        en : 'Procurement of articles or raw materials',
    },

    to     : '#',
    enable : true,
    links  : [
        new ModuleLink( {
            label: {
                es : 'Orden de compra',
                en : 'Purchase order',
            },
            to: '#',
        } ),
        new ModuleLink( {
            label: {
                es : 'Mantenedor de compras',
                en : 'Purchase management',
            },
            to: '#',
        } ),
    ],
} )
