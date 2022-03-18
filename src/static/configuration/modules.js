export class ModuleConfig {

    constructor( {
        // module ID
        key,
        // title per locale
        title,
        // description per locale
        description,
        // module path
        to,
        // is visible?
        enable = true,
        // list of shorcuts links
        links = [],
    } ) {

        this.key = key
        this.title = title
        this.description = description
        this.to = to
        this.enable = enable
        this.links = links

    }

}

export class ModuleLinkConfig {

    constructor( {
        // link ID
        id,
        // label per locale
        label,
        // module view path
        to,
    } ) {

        this.id = id
        this.label = label
        this.to = to

    }

}

export const modules = [
    new ModuleConfig( {
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
                id    : 'users',
                label : {
                    es : 'Mantenedor de usuarios',
                    en : '',
                },
                to: '/maintainer/users',
            } ),
            // {
            //     label: {
            //         es: 'Mantenedor de roles',
            //         en: '',
            //     },
            //     to: '',
            // },
            // {
            //     label: {
            //         es: 'Mantenedor de grupos',
            //         en: '',
            //     },
            //     to: '',
            // },
            // {
            //     label: {
            //         es: 'Permisos condicionales',
            //         en: '',
            //     },
            //     to: '',
            // },
            // {
            //     label: {
            //         es: 'Auditoría para usuarios',
            //         en: '',
            //     },
            //     to: '',
            // },
        ],
    } ),
    // {
    //     key   : 'RRHH',
    //     title : {
    //         es : 'Recursos Humanos',
    //         en : 'Human Resources',
    //     },

    //     description: {
    //         es : 'Administración del capital humano o empleados',
    //         en : 'Personnel administration',
    //     },

    //     to     : '',
    //     enable : true,
    //     links  : [
    //         {
    //             label: {
    //                 es : 'Mantenedor de empleados',
    //                 en : 'Employee management',
    //             },

    //             to: '',
    //         },
    //     ],
    // },
    // {
    //     key   : 'BOIN',
    //     title : {
    //         es : 'Bodega e Inventario',
    //         en : 'Warehouse & Inventory',
    //     },

    //     description: {
    //         es : 'Adm. de almacenes e informes de unidades',
    //         en : 'Warehouse management and unit reporting',
    //     },

    //     to     : '',
    //     enable : true,
    //     links  : [
    //         {
    //             label: {
    //                 es : 'Mantenedor de bodegas',
    //                 en : 'Warehouse management',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Informe de inventario',
    //                 en : 'Inventory report',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Programar control',
    //                 en : 'Schedule control',
    //             },

    //             to: '',
    //         },
    //     ],
    // },
    // {
    //     key   : 'COMP',
    //     title : {
    //         es : 'Compras',
    //         en : 'Purchases',
    //     },

    //     enable      : true,
    //     description : {
    //         es : 'Aprovisionamiento de artículos o materias primas',
    //         en : 'Procurement of articles or raw materials',
    //     },

    //     to    : '',
    //     links : [
    //         {
    //             label: {
    //                 es : 'Orden de compra',
    //                 en : 'Purchase order',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Mantenedor de compras',
    //                 en : 'Purchase management',
    //             },

    //             to: '',
    //         },
    //     ],
    // },
    // {
    //     key   : 'VENT',
    //     title : {
    //         es : 'Ventas',
    //         en : 'Sales',
    //     },

    //     description: {
    //         es : 'Facturación, pedidos, informes y análisis',
    //         en : 'Billing, orders, reports and analysis',
    //     },

    //     to     : '',
    //     enable : true,
    //     links  : [
    //         {
    //             label: {
    //                 es : 'Aceptación de pedidos',
    //                 en : 'Acceptance of orders',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Seguimiento de pedidos pendientes',
    //                 en : 'Track pending orders',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Informes de ventas',
    //                 en : 'Sales reports',
    //             },

    //             to: '',
    //         },
    //     ],
    // },
    // {
    //     key   : 'CONT',
    //     title : {
    //         es : 'Financiero y Contable',
    //         en : 'Financial and Accounting',
    //     },

    //     description: {
    //         es : 'Automatización de procesos contables',
    //         en : 'Automation of accounting processes',
    //     },

    //     to     : '',
    //     enable : true,
    //     links  : [
    //         {
    //             label: {
    //                 es : 'Gestión de nóminas',
    //                 en : 'Management of payroll',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Presupuestos',
    //                 en : 'Budgets',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Emisión de Documentos Tributarios Electrónicos (DTEs)',
    //                 en : 'Issuance of Electronic Tax Documents',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Recepción de Documentos Tributarios Electrónicos (DTEs)',
    //                 en : 'Receipt of Electronic Tax Documents',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Libro de Compra y Venta',
    //                 en : 'Buy and Sell Book',
    //             },

    //             to: '',
    //         },
    //     ],
    // },
    // {
    //     key   : 'CRM',
    //     title : {
    //         es : 'Relaciones con los Clientes - CRM',
    //         en : 'Customer Relationship Management - CRM',
    //     },

    //     description: {
    //         es : 'Interacción Empresa - Cliente',
    //         en : 'Interaction Company - Client',
    //     },

    //     to     : '',
    //     enable : true,
    //     links  : [
    //         {
    //             label: {
    //                 es : 'Gestión de clientes',
    //                 en : 'Customer management',
    //             },

    //             to: '',
    //         },
    //     ],
    // },
    // {
    //     key   : 'PROD',
    //     title : {
    //         es : 'Producción',
    //         en : 'Production',
    //     },

    //     description: {
    //         es : 'Uso de materia prima, sincronización de procesos y evaluación de calidad',
    //         en : 'Use of raw materials, process synchronization and quality evaluation',
    //     },

    //     to     : '',
    //     enable : true,
    //     links  : [
    //         {
    //             label: {
    //                 es : 'Lineas de producción',
    //                 en : 'Production lines',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Registro de actividades',
    //                 en : 'Activity log',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Control de calidad',
    //                 en : 'Quality control',
    //             },

    //             to: '',
    //         },
    //     ],
    // },
    // {
    //     key   : 'SUMI',
    //     title : {
    //         es : 'Cadena de Suministros - SCM',
    //         en : 'Supply Chain Management - SCM',
    //     },

    //     description: {
    //         es : 'Logística, flujo de productos fabricante - consumidor',
    //         en : 'Logistics, manufacturer-consumer product flow',
    //     },

    //     to     : '',
    //     enable : true,
    //     links  : [
    //         {
    //             label: {
    //                 es : 'Seguimiento del transporte',
    //                 en : 'Transport tracking',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Autorización de entrada y salida',
    //                 en : 'Entry and exit authorization',
    //             },

    //             to: '',
    //         },
    //         {
    //             label: {
    //                 es : 'Check-In Punto de Control',
    //                 en : 'Check-In Control Point',
    //             },

    //             to: '',
    //         },
    //     ],
    // },
]
