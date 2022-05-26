import {
    DoctypeFormFieldImageRenderOptions,
} from './doctype'

describe('Doctype Classes', () => {

    describe('DoctypeFormFieldImageRenderOptions', () => {

        test('When isAvatar is true, it should set default props', () => {

            const expectedValues = {
                width  : '40px',
                height : '40px',
                radius : '50%',
            }

            const renderOptions = new DoctypeFormFieldImageRenderOptions( {
                isAvatar: true,
            } )

            expect(renderOptions).toEqual(expectedValues)

        } )

        test('When a prop is defined and isActive is true, prop has greater relevance', () => {

            const expectedValues = {
                width  : '100px',
                height : '75px',
                radius : '50%',
            }

            const renderOptions = new DoctypeFormFieldImageRenderOptions( {
                width    : '100px',
                height   : '75px',
                isAvatar : true,
            } )

            expect(renderOptions).toEqual(expectedValues)

        } )

    } )

} )
