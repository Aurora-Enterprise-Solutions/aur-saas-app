export default function (plop) {

    // create your generators here
    plop.setGenerator('component', {
        description : 'component skeleton',
        prompts     : [{
            type    : 'input',
            name    : 'name',
            message : 'component name',
        }],
        actions: [
            {
                type         : 'add',
                path         : 'src/components/Aur{{pascalCase name}}.vue',
                templateFile : '.plop-templates/component.vue.hbs',
            },
            {
                type         : 'add',
                path         : 'src/assets/styles/components/_aur-{{dashCase name}}.scss',
                templateFile : '.plop-templates/component.scss.hbs',
            },
            {
                type     : 'modify',
                path     : 'src/assets/styles/styles.scss',
                pattern  : /(\/\/ Components)/g,
                template : '$1\n@import "components/aur-{{dashCase name}}";',
            },
        ],
    } )

    plop.setGenerator('module', {
        description : 'module skeleton',
        prompts     : [{
            type    : 'input',
            name    : 'key',
            message : 'module key',
        }],
        actions: [
            {
                type         : 'add',
                path         : 'setup/modules/{{lowerCase key}}.js',
                templateFile : '.plop-templates/module.js.hbs',
            },
            {
                type     : 'modify',
                path     : 'setup/modules.js',
                pattern  : /(\/\/ Modules)/g,
                template : '$1\nimport { moduleConfig as {{lowerCase key}}Module } from \'./modules/{{lowerCase key}}\'',
            },
            {
                type     : 'modify',
                path     : 'setup/modules.js',
                pattern  : /(export const modules = \[)/g,
                template : '$1\n    {{lowerCase key}}Module,',
            },
        ],
    } )

};
