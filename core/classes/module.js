export class Module {

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

export class ModuleLink {

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
