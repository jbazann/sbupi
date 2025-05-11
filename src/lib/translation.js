export default function translate(lang,key = '') {
    let val
    if (langs[lang]) val = key.split('.').reduce((acc, k) => acc && acc[k], langs[lang])
    return typeof val === 'string' ? val : null
};

const es = {
    misc: {
        back: 'Volver',
        expunged: {
            header: 'EXPURGADO.',
            desc: 'A ella no le gustó esto.'
        },
        soon: {
            header: 'Próximamente!',
            desc: 'Esta sección está casi lista.'
        },
        popover: {
            dismiss: 'Click aquí para ocultar este diálogo.'
        }
    },
    theme: {
        titles: {
            theme: 'Tema',
            variant: 'Variante',
        },
        dark: 'Oscuro',
        light: 'Claro'
    },
    cookies: {
        desc: "Perdón, las cookies son obligatorias."
    },
    root: {
        mainMenu: {
            dev: {
                button: 'Desarrollador'
            },
            projects: {
                button: 'Proyectos'
            },
            links: {
                button: 'Enlaces'
            },
            cat: {
                button: 'Gatos',
                another: 'Otro!'
            },
            settings: {
                button: 'Preferencias'
            },
        },
        settingsMenu: {
            language: 'Lenguaje',
            theme: 'Tema',
            style: 'Estilo',
        },
        catMenu: {
            img: 'Una imagen aleatoria de un gato.',
            loading: {
                a: 'Buscando gatitos.',
                b: 'Buscando gatitos..',
                c: 'Buscando gatitos...',
            }
        },
        dev: {
            title: 'Desarrollador backend.'
        }
    }
}

const langs = {es}