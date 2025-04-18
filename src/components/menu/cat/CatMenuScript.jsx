import {useEffect} from "react";
import {onBtn} from "../../fmb/StaticMenuButton.jsx";
import {devErr, devLog, getIdCounter} from "../../../lib/common.js";
import {another, loadingDiv, loadingP, catimg} from "./CatMenu.jsx";
import {get} from '../../../lib/net.js'

export default function CatMenuScript({catButtonId}) {
    useEffect(() => {
        let batch,nextBatch
        const id = getIdCounter(catButtonId),
            anotherButton = document.getElementById(id(another)),
            catloadingp = document.getElementById(id(loadingP)),
            catloadingdiv = document.getElementById(id(loadingDiv)),
            catButton = document.getElementById(id(onBtn)),
            img = document.getElementById(id(catimg))

        const handler = async() => {
            cycleLoadingIndicator(catloadingp)
            batch = await fetchCats()
            devLog({batch},class KittyBatch{}.prototype)
            setTimeout(async () => {
                catloadingdiv.remove()
                catloaded = true
                nextBatch = fetchCats()
                if (batch.length > 0) {
                    img.src = batch.pop().url
                    anotherButton.disabled = false
                } else {
                    batch = await nextBatch
                    devLog({batch},class KittyBatch{}.prototype)
                    if (batch.length > 0) {
                        img.src = batch.pop().url
                        anotherButton.disabled = false
                    } else {
                        offerReload()
                    }
                }
            }, 3500)
        }, opts = {once: true}

        catButton.addEventListener('click', handler, opts)
        return () => {
            catButton.removeEventListener('click', handler, opts)
        }
    },[catButtonId])
}

let catloaded = false, index = -1
function cycleLoadingIndicator(catloadingp) {
    const legends = [
        "Fetching cats.",
        "Fetching cats..",
        "Fetching cats..."
    ], interval = 500
    if (!catloaded && catloadingp) {
        catloadingp.innerText = legends.at(index = ((index + 1) % 3));
        setTimeout(cycleLoadingIndicator, interval, catloadingp);
    }
}

export async function fetchCats() {
    return await get('/w/cats')
        .then(kitties => kitties.cats.map(feline => ({url: feline})))
        .catch(e => {devErr(e); return []})
}

function offerReload() {
    if (confirm(
        "Something went wrong while fetching the cats; everything is about to explode. " +
        "Reload the page to try again?"
    )) window.location.reload();
}