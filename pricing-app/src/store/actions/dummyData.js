import {Wizard} from "../../model/wizard/wizard";

export const getData: () => Wizard = () => ( {
    steps: [
        {
            name: 'Plataforma',
            bigButtonQuestion: {
                title: 'En qué plataforma necesitas la app',
                options: [
                    {
                        name: 'Android',
                        icon: 'https://image.flaticon.com/icons/svg/61/61120.svg'
                    },
                    {
                        name: 'IOS',
                        icon: 'https://www.bridgeit.dk/wp-content/uploads/2015/07/appleiOSLogo.png'
                    },
                    {
                        name: 'Android & IOS',
                        icon: 'https://d2jljza7x0a5yy.cloudfront.net/media/k2/items/cache/35b833c3a5d0f533d16be90b8e93feee_XL.jpg?t=1467304002',
                        multiplier: 2
                    },
                    {
                        name: 'WEB',
                        icon: 'https://cdn4.iconfinder.com/data/icons/programming-developer/512/programing-developer-programming-html-code-coding-language-512.png',
                    },
                ],
                selection: {}
            }
        },
        {
            name: 'Login / registro',
            checkGroupQuestion: {
                title: 'Selecciona métodos de registro:',
                options: [
                    {
                        name: 'Facebook',
                    },
                    {
                        name: 'Google',
                    },
                    {
                        name: 'Usuario & Contraseña',
                    },
                    {
                        name: 'Twitter',
                        isOptional: true,
                    },
                    {
                        name: 'GitHub',
                        isOptional: true,
                    },
                ],
                selection: []
            }
        }
    ]
});
