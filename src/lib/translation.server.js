export {
    translate
}

function translate(lang,key = '') {
    let val
    if (langs[lang]) val = key.split('.').reduce((acc, k) => acc && acc[k], langs[lang])
    return typeof val === 'string' ? val : null
}

const es = {
    misc: {
        back: 'Volver',
        apply: 'Aplicar',
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
    mainMenu: {
        dev: {
            button: 'Desarrollador',
            title: 'Desarrollador backend.'
        },
        projects: {
            button: 'Proyectos'
        },
        links: {
            button: 'Enlaces'
        },
        cat: {
            button: 'Gatos',
            another: 'Otro!',
            img: 'Una imagen aleatoria de un gato.',
            loading: {
                a: 'Buscando gatitos.',
                b: 'Buscando gatitos..',
                c: 'Buscando gatitos...',
            }
        },
        gallery: {
            button: 'Galería'
        },
        settings: {
            button: 'Ajustes',
            language: {
                button: 'Lenguaje'
            },
            theme: {
                button: 'Tema',
                titles: {
                    theme: 'Tema',
                    variant: 'Variante',
                },
                dark: 'Oscuro',
                light: 'Claro'
            },
            style: {
                button: 'Estilo'
            },
            cookies: {
                desc: "Perdón, las cookies son obligatorias."
            },
        },
    }
}

const langs = {es}