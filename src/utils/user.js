import voca from 'voca'

export function getNameInitials() {

    return voca.first(this.name || '').toUpperCase() + voca.first(this.lastName || '').toUpperCase()

}

export function getFullName() {

    return voca.titleCase(`${this.name} ${this.lastName}`).trim()

}
