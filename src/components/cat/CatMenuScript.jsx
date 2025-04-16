import {useEffect} from "react";
import {onBtn} from "../../lib/common.js";

export default function CatMenuScript({catButtonId,anotherButtonId,loadingP,loadingDiv}) {
    const another = document.querySelector('#'+anotherButtonId),
        catloadingp = document.querySelector('#'+loadingP),
        catloadingdiv = document.querySelector('#'+loadingDiv),
        catbutton = document.querySelector('#'+catButtonId + '_' + onBtn)
    useEffect(() => {
        let batch,nextBatch
        catbutton.addEventListener('click', async() => {
            catloadingpCycle(catloadingp)
            batch = await cats()
            brutelyCache(batch)
            setTimeout(async () => {
                another.disabled = false
                catloadingdiv.remove()
                cat.src = batch.pop().url
                nextBatch = await cats()
                brutelyCache(nextBatch)
                catloaded = true
            }, 3500)
        }, {once: true})
    },[])
}

let catloaded = false, index = -1
function catloadingpCycle(catloadingp) {
    let legends = [
        "Fetching cats.",
        "Fetching cats..",
        "Fetching cats..."
    ], interval = 500
    if (!catloaded) {
        catloadingp.innerText = legends.at(index = ((index + 1) % 3));
        setTimeout(catloadingpCycle, interval);
    }
}

function brutelyCache(btch) {
    // currently not necessary but I don't feel like removing every usage
    // - actually, it is necessary when using thecatapi as fallback.
    btch.forEach(async (i) => {
        new Image().src = i.url
    })
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