import { Module, ModuleLink } from "/core/classes/module"

export const moduleConfig = new Module( {
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
        new ModuleLink( {
            label: {
                es : 'Mantenedor de bodegas',
                en : 'Warehouse management',
            },
            to: '#',
        } ),
        new ModuleLink( {
            label: {
                es : 'Informe de inventario',
                en : 'Inventory report',
            },
            to: '#',
        } ),
        new ModuleLink( {
            label: {
                es : 'Programar control',
                en : 'Schedule control',
            },
            to: '#',
        } ),
    ],
} )
