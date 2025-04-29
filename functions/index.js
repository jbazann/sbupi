import translate from "../src/lib/translation.js";

export async function onRequest(context) {
    const { request, env } = context,
        content = await env.ASSETS.fetch(request),
        cookies = cookiesObject(request.headers.get('Cookie')),
        acceptLanguage = request.headers.get('Accept-Language')

    let lang = 'es' // TODO en
    if ((spanishOverEnglish(acceptLanguage) && cookies.lang !== 'en') ||
        cookies.lang === 'es') {
        lang = 'es'
    }

    if (lang === 'en') return content

    return new HTMLRewriter()
        .on("[data-i18n-key]", new class ElementTranslationHandler {
            element(element) {
                const key = element.getAttribute("data-i18n-key") || '',
                    translated = translate(lang,key)
                console.log(key, translated)
                if (translated) element.setInnerContent(translated)
            }
        }())
        .on('html', new class HTMLElementHandler {
            element(element) {
                element.setAttribute('lang',lang)
            }
        })
        .transform(content)
}

function cookiesObject(cookieStr) {
    return cookieStr.split(";")
        .map(str => str.trim().split(/=(.+)/))
        .reduce((acc, curr) => {
            acc[curr[0]] = curr[1];
            return acc;
        }, {})
}

function spanishOverEnglish(ALHeader) {
    return ALHeader.includes('es') &&
        (!ALHeader.includes('en') || ALHeader.indexOf('es') < ALHeader.indexOf('en'))
}