import {deserialize, validatePath} from "../src/lib/routing.js";

export async function onRequest(context) {
    const { request, env } = context,
        path = context.functionPath,
        cookies = cookiesObject(request.headers.get('Cookie') || ""),
        acceptLanguage = request.headers.get('Accept-Language') || ""

    if (isExcluded(path)) return await env.ASSETS.fetch(request)

    let segments = context.params.segments || [],
        localized = isLanguageSegment(segments[0]),
        localizedTarget = false

    if (localized) {
        segments = segments.slice(1)
    } else if ((localizedTarget =
        prefersSupportedLanguage(acceptLanguage,cookies))) {
        return redirect(localizedTarget + path)
    }
    // At this point, we are fetching the correct, localized HTML,
    // though a redirect may still need to happen if the path is invalid.
    // Currently, HTML _must_ be fetched to validate paths.
    let content = await env.ASSETS.fetch(request)

    let validPath, redirect
    const extractor = {
        // This extractor builds the routing data structures
        // that will be used by the client. They _could_
        // be extracted for the final routing step, it might
        // even be more efficient that way, but I already
        // implemented a different method so whatever.
        element(element) {
            const data = element.getAttribute('data-attributes')
                ?.replace(/&quot;/g, '"')
            deserialize(JSON.parse(data).data)
            const r = validatePath(path)
            validPath = r[0]
            redirect = r[1]
        }
    }
    content = new HTMLRewriter()
        .on('[data-hydration-root=Router]', extractor)
        .transform(content)

    if (redirect) return redirect(validPath)
    // At this point, <segments> was built from a <validPath>
    // so there is no need to build a new array,
    // though it may still contain wierd capitalization if no redirection happened

    return setupRouter(
        new HTMLRewriter(),
        [...segments.map(s => s.toLowerCase())]
    ).transform(content)
}

const excluded = [
    "/assets/",
    "/icon/",
    "/img/"
]
function isExcluded(path) {
    switch (path) {
        case "/favicon.ico":
            return true
        default:
            for (const prefix of excluded) {
                if (path.startsWith(prefix)) return true
            }
    }
}

function prefersSupportedLanguage(acceptLanguage, cookies) {
    if((spanishOverEnglish(acceptLanguage) &&
            cookies.lang !== 'en') ||
        cookies.lang === 'es') {
        return '/es'
    }
    return false
}

function normalizePath(path) {
    const segments = path.split('/').filter(s => s)
    if (isLanguagePath(segments.at(0))) segments.slice(1)
    return '/' + segments
        .map(s => s?.toLowerCase())
        .join('/')
}

function isLanguageSegment(segment) {
    switch (segment) {
        case 'es':
            return true
        default:
            return false
    }
}


function redirect(target) {
    console.log('Redirecting to ' + target)
    return Response.redirect(target)
}

function setupRouter(htmlRewriter, segments) {
    let current, previous = 'root'
    while ((current = segments.pop())) {
        htmlRewriter
            .on(`[data-route="${current}"]`,
                new ElementCheckSetter())
            .on(`[data-route-off="${current}"]`,
                new ElementCheckRemover())
            .on(`[data-route="${previous}"]`,
                new ElementCheckRemover())
            .on(`[data-route-sub="${previous}"]`,
                new ElementCheckSetter())
    }
    return htmlRewriter
}

class ElementCheckSetter {
    element(element) {
        element.setAttribute('checked', true)
    }
}

class ElementCheckRemover {
    element(element) {
        element.removeAttribute('checked')
    }
}

function isLanguagePath(str) {
    switch (str?.toLowerCase()) {
        case 'en':
        case 'es':
            return true
        default: return false
    }
}

function cookiesObject(cookieStr) {
    return cookieStr.split(";")
        .map(str => str.split("="))
        .reduce((acc, curr) => {
            if (curr && curr[2]) {
                console.log("Silly cookie: " + JSON.stringify(curr))
                return acc
            }
            if (curr && curr[0]) {
                if (curr[1]) curr[1] = curr[1].trim()
                acc[curr[0].trim()] = curr[1]
            }
            return acc;
        }, {})
}

function spanishOverEnglish(ALHeader) {
    return ALHeader.includes('es') &&
        (!ALHeader.includes('en') || ALHeader.indexOf('es') < ALHeader.indexOf('en'))
}