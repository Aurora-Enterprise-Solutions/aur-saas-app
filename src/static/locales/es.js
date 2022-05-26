import { USER_STATE } from '../../../setup/doctypes/user/types'

export default {
    global: {
        rule: {
            required : "Campo obligatorio.",
            min      : "El largo no puede ser menor a {min}.",
            max      : "El largo no puede ser mayor a {max}.",
            password : {
                error    : "La contraseña no cumple los criterios.",
                help_1_1 : "La contraseña debe cumplir:",
                help_1_2 : "Largo min. 8 caracteres.",
                help_1_3 : "Al menos un caracter en mayúscula.",
                help_1_4 : "Al menos un caracter en minúscula.",
                help_1_5 : "Al menos un caracter numérico.",
            },
            equal_password : "Las contraseñas no coinciden.",
            no_email       : "El correo electrónico ingresado no posee el formato correcto.",
            code_length    : "El código debe ser de 6 dígitos.",
        },
        rigths : "Aurora Enterprise Solutions © Todos los derechos reservados - {year}",
        error  : {
            DEFAULT_ERROR_MESSAGE  : "Compruebe su conexión a internet. Si este error persiste, comuníquese con un Consultor Aurora SaaS.",
            TOKEN_EXPIRED          : "El token ha expirado.",
            INACTIVE_USER          : "El usuario se encuentra inactivo. Contáctese con su Administrador para mayor información.",
            UNKNOWN_USER           : "Usuario, Contraseña o CDN incorrecto, inténtelo nuevamente.",
            USER_NOT_FOUND         : "No fue posible encontrar el usuario ingresado.",
            CANNOT_GENERATE_CODE   : "Ocurrió un error inesperado, el código de autorización no pudo ser generado. Inténtelo nuevamente.",
            UNKNOWN_CODE           : "El código ingresado no es válido, inténtelo nuevamente.",
            CANNOT_CHANGE_PASSWORD : "Ocurrió un error interno al tratar de cambiar la contraseña, inténtelo nuevamente. Si este error persiste, comuníquese con un Consultor Aurora SaaS.",
        },
        message: {
            PASSWORD_CHANGED: "La contraseña ha sido cambiada exitosamente.",
        },
        confirm: {
            LOGOUT: "¿Está seguro que desea cerrar la sesión?",
        },
    },
    components: {
        navbar: {
            search: {
                placeholder: "Ingrese texto de búsqueda",
            },
            logout: "Cerrar sesión",
        },
        maintainer_header_toolbar: {
            button_add     : "Crear {doctypeLabel}",
            button_refresh : "Refrescar Lista",
        },
        maintainer_data_table: {
            loading_text: "Cargando... Por favor espere",
        },
        maintainer_data_table_action_header: {
            title          : "Acción",
            update_tooltip : "Editar",
            delete_tooltip : "Eliminar",
            delete_confirm : "Eliminar",
            delete_cancel  : "Cancelar",
        },
    },
    pages: {
        login: {
            title : "Inicio de Sesión",
            field : {
                email: {
                    label: "Usuario",
                },
                password: {
                    label: "Contraseña",
                },
                cdn: {
                    label: "CDN",
                },
            },
            button: {
                login   : "Iniciar sesión",
                recover : "Recuperar contraseña",
            },
        },
        modules: {
            title: "Selección de Módulo",
        },
        recover_password: {
            title : "Recuperar Contraseña",
            info  : "Una vez solicitada la recuperación de su contraseña, se le entregará un link de autorización a su correo electrónico.",
            field : {
                email: {
                    label       : "Usuario",
                    placeholder : "correo electrónico",
                },
                cdn: {
                    label       : "CDN",
                    placeholder : "cl.empresa.aur",
                },
            },
            button: {
                send : "Enviar link",
                back : "Volver al inicio",
            },
        },
        recover_password_confirm: {
            title : "Recuperar Contraseña",
            info  : "Ingrese su nueva contraseña.",
            field : {
                code: {
                    label       : "Código",
                    placeholder : "código de autorización",
                },
                password: {
                    label       : "Nueva Contraseña",
                    placeholder : "nueva contraseña",
                },
                confirmPassword: {
                    label       : "Confirme Nueva Contraseña",
                    placeholder : "repita nueva contraseña",
                },
            },
            button: {
                send : "Cambiar Contraseña",
                back : "Volver al inicio",
            },
        },
        maintainer: {
        },
    },
    models: {
        user: {
            state: {
                [USER_STATE.ACTIVE]   : "Activo",
                [USER_STATE.INACTIVE] : "Inactivo",
            },
        },
    },
}
