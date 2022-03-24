import { ModuleConfig, ModuleLinkConfig } from "./utils"

export const moduleConfig = new ModuleConfig( {
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
        new ModuleLinkConfig( {
            label: {
                es : 'Aceptación de pedidos',
                en : 'Acceptance of orders',
            },
            to: '#',
        } ),
        new ModuleLinkConfig( {
            label: {
                es : 'Seguimiento de pedidos pendientes',
                en : 'Track pending orders',
            },
            to: '#',
        } ),
        new ModuleLinkConfig( {
            label: {
                es : 'Informe de ventas',
                en : 'Sales reports',
            },
            to: '#',
        } ),
    ],
} )
