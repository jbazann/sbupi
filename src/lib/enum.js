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
    }
}

export const ready = {
    key: 'data-ready',
    val: true
}