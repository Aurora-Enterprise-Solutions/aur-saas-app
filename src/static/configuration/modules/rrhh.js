import { ModuleConfig, ModuleLinkConfig } from "./utils"

export const moduleConfig = new ModuleConfig( {
    key   : 'RRHH',
    title : {
        es : 'Recursos Humanos',
        en : 'Human Resources',
    },

    description: {
        es : 'Administración del capital humano o empleados',
        en : 'Personnel administration',
    },

    to     : '#',
    enable : true,
    links  : [
        new ModuleLinkConfig( {
            id    : 'employee_management',
            label : {
                es : 'Mantenedor de empleados',
                en : 'Employee management',
            },

            to: '#',
        } ),
    ],
} )
