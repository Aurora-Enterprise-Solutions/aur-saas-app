import { Module, ModuleLink } from "/core/classes/module"

export const moduleConfig = new Module( {
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
        new ModuleLink( {
            id    : 'employee_management',
            label : {
                es : 'Mantenedor de empleados',
                en : 'Employee management',
            },

            to: '#',
        } ),
    ],
} )
