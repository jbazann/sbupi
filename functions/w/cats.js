export async function onRequestGet(context) {
    context.jbazann = {}
    context.jbazann.cat_amount = await context.env.CAT_BUCKET.get('cat_amount')
    context.jbazann.cat_size = await context.env.CAT_BUCKET.get('cat_size')
    if (!context.jbazann.cat_amount) context.jbazann.cat_amount = 0
    if (!context.jbazann.cat_size) context.jbazann.cat_size = 0
    if (context.jbazann.cat_amount < 12000 && context.jbazann.cat_size < gbtb(5)) fetchCats(context)
    let ids = []
    while (ids.length < 25) {
        ids.push(Math.floor(Math.random()*context.jbazann.cat_amount))
    }
    let cats = await Promise.all(ids.map(id => context.env.CAT_BUCKET.get(id)))
    return new Response(JSON.stringify(cats));
}

function gbtb(amount) {
    let b, kb, mb = kb = b = 1024
    return  amount * mb * kb * b
}

async function fetchCats(context) {
    const batch = await fetch("https://api.thecatapi.com/v1/images/search?limit=50", {
        headers: {
            'x-api-key': context.env.CATS_API_KEY
        }
    })
    const cats = await parallelBodyFetch(batch.map(obj => obj.url))
    context.env.CAT_BUCKET.put('cat_amount', context.jbazann.cat_amount + cats.length)
    const R2Obj = await Promise.all(cats.map((kitten) =>
        context.env.CAT_BUCKET.put(context.jbazann.cat_amount++, kitten.cat, {httpMetadata: kitten.type})))
    for (const obj of R2Obj) {
        context.jbazann.cat_size += obj.size
    }
    context.env.CAT_BUCKET.put('cat_size', context.jbazann.cat_size)
}

async function parallelBodyFetch(urls) {
    return (await Promise.all(urls.map(url => fetch(url))))
        .filter(res => res.status === 200)
        .map(res => ({cat: res.body,type: res.headers.get("content-type")}))
}
