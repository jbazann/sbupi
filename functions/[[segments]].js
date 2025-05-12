export async function onRequest(context) {
    if (isExcluded(context.functionPath))
        return context.env.ASSETS.fetch(context.request)

    const { request, env, functionPath, params } = context,
        cookies = parseCookies(request),
        firstSegment = (params.segments || [])[0]?.toLowerCase(),
        language = request.headers.get('Accept-Language') || "en",
        isLocalizedPath = isLanguageSegment(firstSegment),
        htmlPath = isLocalizedPath ? `/${firstSegment}/` : '/',
        segments = ((isLocalizedPath ? params.segments.slice(1) : params.segments) || [])
            .map(s => s.toLowerCase())

    // Redirect to localized path
    let localizedTarget = false
    if (!isLocalizedPath && (localizedTarget = prefersSupportedLanguage(language,cookies))) {
        return redirect(replacePath(request.url,localizedTarget + functionPath  ))
    }

    // Parse valid path segments for routing
    const validSegments = []
    let serverPath = await env.ASSETS.fetch('https://assets.local/serverpath.json').then(r => r.json())
    for (const segment of segments) {
        if (serverPath[segment]) {
            validSegments.push(segment)
            serverPath = serverPath[segment]
        } else break
    }

    // Fetch localized HTML
    let response = await env.ASSETS.fetch(new Request(
        // This trims the path from the url, replacing it with htmlPath
        // This is because Cloudflare seems to only let me have full SPA
        // or full MPA routing; I guess making sense is beyond web developers
        replacePath(request.url,htmlPath),
        request
    ))

    // Set initial client-routing state.
    return serverRouter(new HTMLRewriter(), validSegments)
        .transform(response)
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

function replacePath(url, path) {
    const hostnameIndex = url.indexOf('://') + 3
    return url.slice(0, url.indexOf('/', hostnameIndex)) + path
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
    switch (segment?.toLowerCase()) {
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

function serverRouter(htmlRewriter, segments) {
    let current, previous = 'root'
    segments = segments.reverse()
    while ((current = segments.pop())) {
        htmlRewriter
            .on(`[data-route="${current}"]`,
                new ElementCheckSetter())
            .on(`[data-route-off="${current}"]`,
                new ElementCheckRemover())
            .on(`[data-route-sub="${previous}"]`,
                new ElementCheckSetter())
            .on(`[data-route="${previous}"]`,
                new ElementCheckRemover())
        previous = current
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

function parseCookies(request) {
    return (request.headers.get('Cookie') || "")
        .split(";")
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

function spanishOverEnglish(acceptLanguage) {
    return acceptLanguage.includes('es') &&
        (!acceptLanguage.includes('en') || acceptLanguage.indexOf('es') < acceptLanguage.indexOf('en'))
}