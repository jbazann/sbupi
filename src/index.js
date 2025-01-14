const buttons = new Map();

class MenuButton {
    constructor(name,menu,under) {
        this.name = name
        this.menu = menu
        this.key = name + menu
        this.path = name
        this.elem = document.getElementById(this.name + 'btn' +this.menu)
        this.chk = document.getElementById(this.name + 'chk' + this.menu)
        this.menuchk = document.getElementById('chk' + this.menu)
        this.submenuchk = document.getElementById('submenuchk' + this.menu)
        this.under = under ? buttons.get(under + (menu-1)) : null
        this.over = []
        this.under?.over?.push(this.elem)
        this.label = this.elem.innerText
        this.elem.addEventListener('click', this.menuListener(), true)
        buttons.set(this.key, this)
    }

    menuListener() {
        const button = this.key;
        return (function () {
            menuListener(button);
        });
    }
}

function menuListener(button) {
    const cuttingcorners = button // fixme
    button = buttons.get(button)
    const back = button.elem.innerText === 'Back'
    button.chk.click(); button.menuchk.click(); button.under?.submenuchk?.click()
    button.elem.innerText = back ? button.label : 'Back'
    if (!back) button.over?.at(0)?.focus()
    let currentPath = window.location.pathname
    if (currentPath.endsWith('/')) currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'))
    if (initialized && !back) history.pushState(null,'', currentPath + '/' + button.path) // fixme
    if (initialized && back) history.pushState(null,'', removeLastSegment(currentPath)) // fixme
    if (cuttingcorners === 'links1') document.getElementById('remindmetofixthis').focus() // fixme
    if (cuttingcorners === 'cat1') document.getElementById('anothercat').focus() // fixme
}

export function menuButtons(btns, menu, under) {
    for (const button of btns) new MenuButton(button,menu,under)
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

let initialized = false

export function init() {
    let path = window.location.pathname.split('/').filter(p => p !== '').reverse()
    let menu = 1;
    let button
    while (button = buttons.get(path.pop() + menu++)) {
        button.elem.click()
    }
    initialized = true
}

function removeLastSegment(target) {
    const result =  target.substring(0,target.lastIndexOf('/'))
    return result === '' ? '/' : result
}