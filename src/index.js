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
    const back = button.elem.innerText === 'Back'
    button.elem.innerText = back ? button.label : 'Back'
    button.chk.click(); button.menuchk.click(); button.under?.submenuchk?.click()
    if (!back && button.focusOnAction) document.getElementById(button.focusOnAction).focus()
}


export async function cats() {
    // TODO use my own API with sanitized cat images
    // In the meantime, I'm sorry if you end up seeing porn or some other
    // unwanted content if thecatapi is compromised.
    // I am also sorry for exposing your IP to third parties.
    // And I apologize for whatever other security risk I unknowingly exposed you to.
    // Such is life.
    return await ((await fetch('https://api.thecatapi.com/v1/images/search?limit=10')).json())
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
    while (pressedButtons.length > 0) {
        rememberClicks = false
        let btn = pressedButtons.pop()
        btn.elem.click()
        rememberClicks = true
    }
    let path = window.location.pathname
        .split('/')
        .filter(s => s !== '')
        .reverse();
    let menu = 1;
    let button
    while (button = buttons.get(path.pop() + menu++)) {
        button.elem.click()
    }
    clicksPushState = true
}

function removeLastSegment(target) {
    const result =  target.substring(0,target.lastIndexOf('/'))
    return result === '' ? '/' : result
}

window.addEventListener('popstate', init)
