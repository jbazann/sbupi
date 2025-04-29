export const themes = {
    variants: {
        light: 'light',
        dark: 'dark',
    },
    default: 'default'
}

export const settings = {
    theme: {
        key: 'theme',
        attr: 'data-theme',
        variant: {
            key: 'theme-variant',
            attr: 'data-theme-variant',
        }
    },
    lang: {
        key: 'lang',
        attr: 'lang'
    }
}

export const ready = {
    key: 'data-ready',
    val: true
}