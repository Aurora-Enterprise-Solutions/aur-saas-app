import { Module, ModuleLink } from "/core/classes/module"

export const moduleConfig = new Module( {
    key   : 'SALES',
    title : {
        es : 'Ventas',
        en : 'Sales',
    },

    description: {
        es : 'Facturación, pedidos, informes y análisis',
        en : 'Billing, orders, reports and analysis',
    },

    to     : '#',
    enable : true,
    links  : [
        new ModuleLink( {
            label: {
                es : 'Aceptación de pedidos',
                en : 'Acceptance of orders',
            },
            to: '#',
        } ),
        new ModuleLink( {
            label: {
                es : 'Seguimiento de pedidos pendientes',
                en : 'Track pending orders',
            },
            to: '#',
        } ),
        new ModuleLink( {
            label: {
                es : 'Informe de ventas',
                en : 'Sales reports',
            },
            to: '#',
        } ),
    ],
} )
