import { ModuleConfig, ModuleLinkConfig } from "./utils"

export const moduleConfig = new ModuleConfig( {
    key   : 'INVENTORY',
    title : {
        es : 'Bodega e Inventario',
        en : 'Warehouse & Inventory',
    },

    description: {
        es : 'Adm. de almacenes e informes de unidades',
        en : 'Warehouse management and unit reporting',
    },

    to     : '#',
    enable : true,
    links  : [
        new ModuleLinkConfig( {
            label: {
                es : 'Mantenedor de bodegas',
                en : 'Warehouse management',
            },
            to: '#',
        } ),
        new ModuleLinkConfig( {
            label: {
                es : 'Informe de inventario',
                en : 'Inventory report',
            },
            to: '#',
        } ),
        new ModuleLinkConfig( {
            label: {
                es : 'Programar control',
                en : 'Schedule control',
            },
            to: '#',
        } ),
    ],
} )
