export async function onRequest(context) {
    if (isExcluded(context.functionPath))
        return context.env.ASSETS.fetch(context.request)

    const { request, env, params } = context,
        cookies = parseCookies(request),
        firstSegment = params.segments?.[0]?.toLowerCase(),
        headerLanguages = parseAcceptLanguage(request) || ['en'],
        isLocalizedPath = isLanguageSegment(firstSegment),
        htmlPath = isLocalizedPath ? `/${firstSegment}/` : '/',
        segments = ((isLocalizedPath ? params.segments?.slice(1) : params.segments) || [])
            .map(s => s.toLowerCase())

    // Redirect to localized path
    const preferredLocalePath = getUserSelectedLocale(htmlPath,cookies.lang,headerLanguages)
    if (preferredLocalePath !== htmlPath) {
        return redirect(replacePath(request.url,preferredLocalePath + segments.join('/')))
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

    const rewriter = new HTMLRewriter()

    // Set user preferences
    setTheme(rewriter,cookies)

    // Set initial client-routing state.
    serverRouter(rewriter, validSegments)

    return rewriter.transform(response)
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

function getUserSelectedLocale(requested,langCookie,headerLanguages) {
    const preferredLocalePath = getLocaleFromCookie(langCookie) ??
        getLocaleFromHeader(headerLanguages) ?? '/'

    if (preferredLocalePath !== requested && (langCookie || requested === '/')) {
        return preferredLocalePath
    }
    return requested
}

function replacePath(url, path) {
    const hostnameIndex = url.indexOf('://') + 3
    return url.slice(0, url.indexOf('/', hostnameIndex)) + path
}

const supportedLanguageHeaders = [
    {header: 'en', path: '/'},
    {header: 'es', path: '/es/'},
]
function getLocaleFromHeader(languages) {
    let preferred
    while (preferred = languages.pop()) {
        for (const entry of supportedLanguageHeaders) {
            console.log(preferred,entry)
            if (preferred.startsWith(entry.header)) return entry.path
        }
    }
}
function getLocaleFromCookie(lang) {
    switch (lang) {
        case 'en': return '/'
        case 'es': return '/es/'
    }
}

function setTheme(htmlRewriter, cookies) {
    cookies["theme"] && htmlRewriter.on('html', new ELementAttributeSetter('data-theme',cookies["theme"]))
    cookies["theme-variant"] && htmlRewriter.on('html', new ELementAttributeSetter('data-theme-variant',cookies["theme-variant"]))
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
}

class ELementAttributeSetter {
    constructor(key,value) {
        this.key = key
        this.value = value
    }
    element(element) {
        element.setAttribute(this.key, this.value)
    }
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
        .map(str => str.split("=", 2))
        .reduce((acc, curr) => {
            acc[curr[0]?.trim() ?? ''] = curr[1]?.trim()
            return acc;
        }, {})
}

/**
 * @returns an array of language strings sorted from smallest to highest 'q' value.
 */
function parseAcceptLanguage(request) {
    return (request.headers.get('Accept-Language') || "")
        .split(",")
        .map(str => str.split(";q=", 2))
        .map(arr => ({
            lang: arr[0]?.trim() || '',
            q: arr[1]?.trim() || '1'
        }))
        .sort((a,b) => a.q - b.q)
        .reduce((acc, curr) => {
            acc.push(curr.lang)
            return acc
        }, [])
}