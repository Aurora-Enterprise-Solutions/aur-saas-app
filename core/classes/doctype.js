import locales from './../../src/static/locales'
import { getSafeFieldType, getSafeFieldRenderType, FIELD_RENDER_TYPE } from '../constants/fieldTypes'

export class Doctype {

    constructor( {
        name,
        label,
        maintainerLabel,
        forms,
    } ) {

        this.name = name
        this.label = new DoctypeLabel(label)
        this.maintainerLabel = new DoctypeLabel(maintainerLabel)
        this.setForms(forms)

    }

    setForms(forms) {

        this.forms = []

        const formNames = []

        forms.forEach(form => {

            if (formNames.includes(form.name) )
                throw new Error(`Doctype: form '${form.name}' already exists`)

            formNames.push(form.name)

            this.forms.push(new DoctypeForm(form) )

        } )

    }

}

export class DoctypeLabel {

    constructor(label) {

        Object.keys(locales).forEach(key => {

            this[key] = label[key] || ''

        } )

    }

}

export class DoctypeForm {

    constructor( {
        name, // the name have to be unique
        label,
        recordKey,
        foreignerKey,
        formForeigner,
        itemsPerPage,
        dense,
        fields,
        crudUrls,
        allowedCrudOperations,
    } ) {

        if (!name)
            throw new Error(`DoctypeForm: name is required`)

        this.name = name
        this.label = new DoctypeLabel(label)
        this.recordKey = recordKey
        this.foreignerKey = foreignerKey
        this.formForeigner = formForeigner
        this.itemsPerPage = itemsPerPage
        this.dense = dense
        this.setFields(fields)

        this.crudUrls = {
            list   : crudUrls ? crudUrls.list : null,
            create : crudUrls ? crudUrls.create : null,
            update : crudUrls ? crudUrls.update : null,
            delete : crudUrls ? crudUrls.delete : null,
        }

        this.allowedCrudOperations = {
            create     : allowedCrudOperations ? allowedCrudOperations.create : false,
            update     : allowedCrudOperations ? allowedCrudOperations.update : false,
            delete     : allowedCrudOperations ? allowedCrudOperations.delete : false,
            deleteMany : allowedCrudOperations ? allowedCrudOperations.deleteMany : false,
        }

    }

    setFields(fields) {

        this.fields = []

        fields.forEach(field => {

            this.fields.push(new DoctypeFormField(field) )

        } )

    }

}

export class DoctypeFormField {

    constructor( {
        name,
        label,
        type,
        renderType,
        required,
        rules,
        render,
        caseSensitive,
        defaultValue,
        renderOptions,
        align,
        sortable,
        filterable,
        groupable,
        divider,
        classList,
        cellClass,
        width,
        filter,
        sort,
    } ) {

        this.name = name
        this.label = new DoctypeLabel(label)
        this.type = getSafeFieldType(type)
        this.renderType = getSafeFieldRenderType(renderType)
        this.required = required
        this.rules = rules
        this.render = render
        this.caseSensitive = caseSensitive
        this.defaultValue = defaultValue

        if (renderOptions)
            this.renderOptions = this.getRenderOptions(renderOptions)
        else
            this.renderOptions = {}

        this.align = [ 'center', 'top', 'bottom' ].includes(align) ? align : 'start'

        this.sortable = sortable
        this.filterable = filterable
        this.groupable = groupable
        this.divider = divider
        this.cellClass = cellClass
        this.class = classList
        this.width = width
        this.filter = filter
        this.sort = sort

    }

    getRenderOptions(renderOptions) {

        switch (this.renderType) {

            case FIELD_RENDER_TYPE.IMAGE: return new DoctypeFormFieldImageRenderOptions(renderOptions)

            case FIELD_RENDER_TYPE.CUSTOM: return new DoctypeFormFieldCustomRenderOptions(renderOptions)

            default: {

                throw new Error(`DoctypeFormField.getRenderOptions: unknown renderType: ${this.renderType}`)

            }

        }

    }

}

export class DoctypeFormFieldImageRenderOptions {

    constructor( {
        width,
        height,
        radius,
        isAvatar,
    } ) {

        if (isAvatar) this.setDefaultAsAvatar()

        typeof width !== 'undefined' ?
            this.width = typeof width !== 'undefined' && isNaN(width) ? width : `${width}px` :
            this.width = this.width

        typeof height !== 'undefined' ?
            this.height = isNaN(height) ? height : `${height}px` :
            this.height = this.height

        typeof radius !== 'undefined' ?
            this.radius = isNaN(radius) ? radius : `${radius}px` :
            this.radius = this.radius

    }

    setDefaultAsAvatar() {

        this.width = '40px'
        this.height = '40px'
        this.radius = '50%'

    }

}

export class DoctypeFormFieldCustomRenderOptions {

    constructor( {
        component,
        ...props
    } ) {

        this.component = component
        this.props = { ...props }

    }

}
