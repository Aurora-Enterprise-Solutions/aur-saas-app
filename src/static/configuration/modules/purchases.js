import { ModuleConfig, ModuleLinkConfig } from "./utils"

export const moduleConfig = new ModuleConfig( {
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
        new ModuleLinkConfig( {
            label: {
                es : 'Orden de compra',
                en : 'Purchase order',
            },
            to: '#',
        } ),
        new ModuleLinkConfig( {
            label: {
                es : 'Mantenedor de compras',
                en : 'Purchase management',
            },
            to: '#',
        } ),
    ],
} )
