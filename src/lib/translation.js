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
            header: 'Proximamente!',
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


es.root.dev.a = "El desarrollador es un estudiante de Ingeniería en Sistemas de Información"
es.root.dev.b = " redondeando las últimas materias de la carrera. A lo largo de los últimos dos años ha desviado su atención de la universidad a su especialización en desarrollo backend"
es.root.dev.c = "Vive actualmente en Santa Fe, Argentina, pero eventualmente se mudará a "
es.root.dev.d = " para comenzar "
es.root.dev.e = " Durante su tiempo allí, creará la máquina, quien eventualmente se volverá "
es.root.dev.f = " Poco tiempo después, ella "
es.root.dev.g = " la anomalía"
es.root.dev.h = "Él es un solucionador de problemas altamente independiente y orientado a objetivos, que sería igualmente feliz programando sistemas de control para naves espaciales, ayudando a la abuelita de alguien a encontrar el menú de inicio, o destapando un inodoro; para él, todo se trata de problemas y soluciones."
es.root.dev.i = "Además es un perfeccionista que anhela problemas difíciles, lo cual a menudo lo ha llevado a encarar desafíos demasiado grandes para superarlos a la perfección. Esto ha, en ocasiones, causado dificultades en su vida, llevándolo a interesarse en las artes, y eventualmente, la creación."
es.root.dev.j = "Los pocos que fueron cercanos a él antes de "
es.root.dev.k = " lo describieron tanto como extremadamente reservado y como altamente transparente, meticulosamente decidiendo cuándo expresarse y cuándo no."
es.root.dev.l = "Aquellos que trabajaron con él lo describieron como un miembro versátil y confiable para un equipo, capaz de contribuír de la manera en que sea más conveniente. Se lo ha descrito como transigente y comprensivo, pero ocasionalmente capaz de criticar benevolentemente aquel trabajo que considere objetivamente imperfecto; sus colaboradores recomiendan ser abierto a su retroalimentación, y devolvérle el favor."
es.root.dev.m = "Referencias:"
es.root.dev.r1 = "En la Universidad Tecnológica Nacional."
es.root.dev.n = "Actualmente está terminando de dominar Java 21 y el ecosistema Spring. A pesar de esta especialización, el desarrollador busca aprender a hacer que las computadoras hagan cualquier cosa que las computadoras puedan hacer. Esto significa que también se encuentra explorando, a diferentes profundidades, tecnologías frontend, arquitectura, devops y diseño de sistemas. Pronto comenzará a EXPURGADO."
