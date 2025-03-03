const buttons = new Map()

class MenuButton {
    constructor(name,menu,under,underMenu,focusOn) {
        this.name = name
        this.menu = menu
        this.key = name + menu
        this.path = name
        this.elem = document.getElementById(this.name + 'btn' +this.menu)
        this.chk = document.getElementById(this.name + 'chk' + this.menu)
        this.menuchk = document.getElementById('chk' + this.menu)
        this.submenuchk = document.getElementById('submenuchk' + this.menu)
        this.under = under ? buttons.get(under + underMenu) : null
        this.focusOnAction = focusOn
        this.label = this.elem.innerText.trim()
        this.elem.addEventListener('click', this.menuListener(), true)
        buttons.set(this.key, this)
    }

    menuListener() {
        const buttonKey = this.key;
        return (function () {
            buttonListener(buttonKey)
        });
    }
}

export function registerButtons(btns, menu, under, underMenu) {
    for (const button of btns) new MenuButton(button.name, menu, under, underMenu, button.focusOn)
}

function action(button) {
    const isLastPressed = pressedButtons.at(-1)?.name === button.name
    button.elem.innerText = !isLastPressed ? button.label : 'Back'
    button.chk.click(); button.menuchk.click(); button.under?.submenuchk?.click()
    if (isLastPressed && button.focusOnAction) {}document.getElementById(button.focusOnAction).focus();
}


const caniusesomeoneelsescats = "An error occurred while fetching my cats. " +
    "Do you want to attempt to fetch cats from thecatapi.com instead? " +
    "They are just as cute, just not under my supervision. \n\n" +
    "If you are seeing this after refreshing the page just to see the loading" +
    "animation again, this is a known bug that I don't feel like fixing right now. " +
    "Just click cancel, and refresh again " +
    "if the cats don't show up after 5 seconds."
let catConsent = false
let alreadyAsked = false

function permissionForCats() {
    if (!alreadyAsked) setTimeout(() => alreadyAsked = true) // don't ask why
    return alreadyAsked ? catConsent : catConsent = confirm(caniusesomeoneelsescats)
}

export async function cats() {
    let surelyThisWontHappen = false
    let kittens = await fetch('/w/cats')
        .then(r => r.json())
        .then(kitties => kitties.cats.map(feline => ({url: feline})))
        .catch(() => surelyThisWontHappen = true);

    // In case my API fails I need this fallback,
    // I'm sorry if you end up seeing porn or some other
    // unwanted content if thecatapi is compromised.
    // I am also sorry for exposing your IP to third parties.
    // And I apologize for whatever other security risk I unknowingly exposed you to.
    // Such is life.

    if (surelyThisWontHappen && permissionForCats()) {
        kittens = await ((await fetch('https://api.thecatapi.com/v1/images/search?limit=10')).json())
    }
    return kittens
}


const redirects = new Map()

redirects.set('projects',['proyectos']) //TODO

let clicksPushState = false
let rememberClicks = true
let pressedButtons = []

function buttonListener(key) {
    const button = buttons.get(key)
    const isLastPressed = pressedButtons.at(-1)?.name === button.name
    let state = {
        key: button.key,
        isPushedState: true
    }
    let currentPath = window.location.pathname
    if (currentPath.endsWith('/')) currentPath = currentPath.substring(0,-1)
    if (isLastPressed) {
        pressedButtons.pop()
        if (clicksPushState) history.pushState(state,'', removeLastSegment(currentPath))
    } else {
        if (rememberClicks) pressedButtons.push(button)
        if (clicksPushState) history.pushState(state,'', currentPath + '/' + button.path)
    }
    action(button)
}

export function init() {
    clicksPushState = false
    rememberClicks = false
    while (pressedButtons.length > 0) {
        pressedButtons.pop().elem.click()
    }
    rememberClicks = true
    let path = window.location.pathname
        .split('/')
        .filter(s => s !== '')
        .reverse();
    let menu = 1;
    let button
    while (button = buttons.get(path.pop() + menu++)) {
        if (button.elem.innerText !== 'Back') button.elem.click()
    }
    clicksPushState = true
}

function removeLastSegment(target) {
    const result =  target.substring(0,target.lastIndexOf('/'))
    return result === '' ? '/' : result
}

window.addEventListener('popstate', init)

export const THEME_KEY = 'THEME'
const THEME_RADIO_GROUP = 'theme'
const LANGUAGE_RADIO_GROUP = 'language'
const THEME_OPTIONS = {
    DARK: {
        radio: 'dark-rb'
    },
    LIGHT: {
        radio: 'light-rb'
    }
}

export const LANGUAGE_OPTIONS = {
    EN: {
        radio: 'en-rb'
    },
    ES: {
        radio: 'es-rb'
    }
}

export function initSettings() {
    let theme = JSON.parse(localStorage.getItem(THEME_KEY))
    if (!theme) {
        theme =  (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
            THEME_OPTIONS.DARK :
            THEME_OPTIONS.LIGHT
    }
    document.getElementById(theme.radio).checked = true
    themeListener()

    for (const elem of document.getElementsByName(THEME_RADIO_GROUP)) {
        elem.addEventListener('click', themeListener)
    }

    let lang = getCookie(LANGUAGE_COOKIE_NAME)
    if (lang) {
        document.getElementById(LANGUAGE_OPTIONS[lang].radio).checked = true
    }

    for (const elem of document.getElementsByName(LANGUAGE_RADIO_GROUP)) {
        elem.addEventListener('click', languageListener);
    }
}

function themeListener() {
    let theme = document.querySelector('input[name=theme]:checked')?.value
    if (theme === 'DARK') {
        document.body.classList.add('dark')
        addCookie(THEME_COOKIE_NAME, 'dark', 90)
    }
    if (theme === 'LIGHT') {
        document.body.classList.remove('dark')
        addCookie(THEME_COOKIE_NAME, 'light', 90)
    }
    if (theme) localStorage.setItem(THEME_KEY, JSON.stringify(THEME_OPTIONS[theme]))
}

function languageListener() {
    const lang = document.querySelector('input[name=language]:checked')?.value
    const cookie = getCookie(LANGUAGE_COOKIE_NAME)
    if (cookie !== lang) {
        addCookie(LANGUAGE_COOKIE_NAME, lang, 90)
        location.reload()
    }
}


const LANGUAGE_COOKIE_NAME = 'jbazann-lang'
const THEME_COOKIE_NAME = 'jbazann-theme'

function addCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
    return document.cookie
        .split("; ")
        .find(row => row.startsWith(name + "="))
        ?.split("=")[1]
        ? decodeURIComponent(document.cookie
            .split("; ")
            .find(row => row.startsWith(name + "="))
            .split("=")[1]) : null;
}