/**
 * Wraps common operations and patterns to further simplify
 * usage of the fetch API.
 * @module jbazann/net
 */
import {devErr, devLog} from "./common.js";
import {netlog} from "./environment.js";

class RequestBuilder {
    #baseUrl
    #path = ''
    #opt = {
        mode: 'cors'
    }
    #then = [{
        then: logHeaders
    },{
        then: async (r) => {
            return r.ok ?
                (r.headers.get('Content-Type') === 'application/json' ?
                    logBody(await r.json()) :
                    logBody(await r.text())) :
                await neterr(r)
        }
    },{
        _catch: (r) => {devErr(r.msg); return r.response}
    }]

    constructor(baseUrl) {
        this.#baseUrl = baseUrl
    }

    opt(opt, clear) {
        this.#opt = clear ? {...opt} : {...this.#opt, ...opt}
        return this
    }

    then(then, _catch, clear) {
        if (clear) this.#then = []
        this.#then.push({then: then, _catch: _catch})
        return this
    }

    get() {
        this.#opt.method = 'GET'
        return this
    }

    post() {
        this.#opt.method = 'POST'
        return this
    }

    put() {
        this.#opt.method = 'PUT'
        return this
    }

    delete() {
        this.#opt.method = 'DELETE'
        return this
    }

    async run() {
        let p = fetch((this.#baseUrl || '').concat(this.#path || ''), this.#opt)
        for (const step of this.#then) {
            p = p.then(step.then,step._catch)
        }
        return await p
    }
}

async function logHeaders(r) {
    devLog(Object.fromEntries(r.headers.entries()), class Headers{}.prototype)
    return r
}

async function logBody(body) {
    devLog({body}, class ResponseBody{}.prototype)
    return body
}

async function neterr(r) {
    devLog(r)
    throw {msg: 'A RequestBuilder\'s default chain received an empty or unexpected response.', response: await r.text()}
}

export async function get(url) {
    const req = new RequestBuilder(url)
    return await req.get().run()
}
