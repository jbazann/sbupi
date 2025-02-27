const bucket_keys = {
    cat_metrics: 'cat_metrics',
    Aoperations: 'a_operations', // TODO use these
    Boperations: 'b_operations'
}

const IMG_AMOUNT = 12 // + 1
const SCRAPE_AMOUNT = 17 // * 2 + 2 = 49

export async function onRequestGet(context) {
    let metrics = await context.env.CAT_BUCKET.get(bucket_keys.cat_metrics).then(r2o => r2o?.json())

    if (!metrics) metrics = {
        cat_amount: 0,
        cat_size: 0
    }

    if (metrics.cat_amount < 12000 && metrics.cat_size < gbtb(5)) context.waitUntil(fetchCats(context,metrics))

    const ids = Array.from({ length: IMG_AMOUNT },
        () => Math.floor(Math.random() * metrics.cat_amount));
    let response = {
        cats: await Promise.all(ids.map(((id) => context.env.CAT_BUCKET.get(id)
            .then((r2o) => toDataURL(r2o))))),
        amount: metrics.cat_amount,
        size: metrics.cat_size
    }
    return new Response(JSON.stringify(response));
}

function gbtb(gb) {
    let b, kb, mb = kb = b = 1024
    return  gb * mb * kb * b
}

async function toDataURL(r2o) {
    let buffer = await r2o?.arrayBuffer()
    return 'data:'+r2o?.httpMetadata.contentType+';base64,'+arrayBufferToBase64(buffer)
}

function arrayBufferToBase64(buffer) {
    return btoa(new Uint8Array(buffer)
        .reduce((binary, byte) => binary += String.fromCharCode(byte), ''));
}

async function fetchCats(context,metrics) {
    const batch = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${SCRAPE_AMOUNT}`, {
        headers: {
            'x-api-key': context.env.CATS_API_KEY
        }
    }).then(res => res.json())

    const cats = (await Promise.all(batch.map(async obj => {
        const res = await fetch(obj.url)
        if (!res.ok) return null;
        return ({cat: res.body,type: new Headers({"content-type": res.headers.get("content-type")})})
    }))).filter(cat => cat)

    const R2Obj = await Promise.all(cats.map(async (kitten) =>
        context.env.CAT_BUCKET.put((metrics.cat_amount)++, kitten.cat, {httpMetadata: kitten.type})))

    for (const obj of R2Obj) {
        metrics.cat_size += obj.size
    }

    await Promise.all([
        context.env.CAT_BUCKET.put(bucket_keys.cat_metrics, JSON.stringify(metrics)),
    ])
}