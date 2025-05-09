import {useEffect} from "react";
import {devErr, devLog} from "../../../lib/common.js";
import {get} from '../../../lib/net.js'

export default function CatMenuScript({loadingDiv,loadingP,anotherButton,catImg,contextId}) {
    useEffect(() => {
        let batch, nextBatch, handler, handlerOpts, anotherHandler

        const contextDiv = document.getElementById(contextId),
            context = JSON.parse(contextDiv?.getAttribute('data-context'))

        const anotherButtonElem = document.getElementById(anotherButton),
            loadingPElem = document.getElementById(loadingP),
            loadingDivElem = document.getElementById(loadingDiv),
            onBtnElem = document.getElementById(context?.onBtn),
            catImgElem = document.getElementById(catImg)

        onBtnElem?.addEventListener('click', handler = async() => {
            let loadingIndicator = cycleLoadingIndicator(loadingPElem)
            batch = await fetchCats()
            setTimeout(async () => {
                clearTimeout(loadingIndicator.current)
                loadingDivElem.remove()
                nextBatch = fetchCats()
                if (batch.length > 0) {
                    catImgElem.src = batch.pop().url
                    anotherButtonElem.disabled = false
                } else {
                    offerReload()
                }
            }, 3210)
        }, handlerOpts = {once: true})

        anotherButtonElem?.addEventListener('click', anotherHandler = async() => {
            if (batch.length > 0) {
                catImgElem.src = batch.pop().url
                if (batch.length === 0) {
                    batch = await nextBatch
                    nextBatch = fetchCats()
                }
            } else {
                batch = await nextBatch
                if (batch.length > 0) {
                    catImgElem.src = batch.pop().url
                } else {
                    offerReload()
                }
            }
        })
        return () => {
            onBtnElem?.removeEventListener('click', handler, handlerOpts)
            anotherButtonElem?.removeEventListener('click', anotherHandler)
        }
    })
}

let index = -1, timeout = {}
function cycleLoadingIndicator(pElem) {
    const legends = [
        "Fetching cats.",
        "Fetching cats..",
        "Fetching cats..."
    ], interval = 500
    if (pElem) {
        pElem.innerText = legends.at(index = ((index + 1) % 3));
        timeout.current = setTimeout(cycleLoadingIndicator, interval, pElem);
    }
    return timeout
}

export async function fetchCats() {
    return await get('/w/cats')
        .then(kitties => kitties.cats.map(feline => ({url: feline})))
        .catch(e => {devErr(e); return []})
}

function offerReload() {
    if (confirm(
        "Something went wrong while fetching the cats; horrible things are about to happen. " +
        "Reload the page to try again?"
    )) window.location.reload();
}