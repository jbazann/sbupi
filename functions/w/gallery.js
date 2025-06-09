export async function onRequestGet(context) {
    // TODO data store
    const url = new URL(context.request.url)
    let response
    switch (url.searchParams.get('lang') || 'en') {
        case 'en': response = en(); break;
        case 'es': response = es(); break;
    }
    const headers = new Headers()
    headers.set('Content-Type','application/json')
    return new Response(JSON.stringify(response),{headers});
}

function en() {
    return {
        entries: [
            {
                key: 'I_d1',
                label: '"I" — Sample draft',
                lang: 'en',
                version: 'unused',
                title: 'I',
                content:
                    "The long way walking, by darkness nigh;\n" +
                    "in the company of stark nothing.\n" +
                    "As I rehearsed the next morning lie,\n" +
                    "invited felt, the voice of something—\n" +
                    "to preach to my ear, the end of I.\n" +
                    "\n" +
                    "The millionth gaze at the umber sky,\n" +
                    "\"the truth up there is just as numbing.\"\n" +
                    "The voice sees beyond what meets the eye,\n" +
                    "and speaks words with the sharpest cunning—\n" +
                    "preaching to my ear, the end of I.\n" +
                    "\n" +
                    "Dare I want silence, it would comply;\n" +
                    "the voice can wait for later coming.\n" +
                    "Through my very sight it would imply\n" +
                    "A message certain, unbecoming—\n" +
                    "that soon shall be here, the end of I.\n" +
                    "\n" +
                    "And I deny it, oh, I deny;\n" +
                    "To trust my morning lies, oh, I try.\n" +
                    "But with the night comes a somber sky,\n" +
                    "and it can quickly tell my bluffing—\n" +
                    "a sign of how near, the end of I.\n" +
                    "\n" +
                    "So what is left now, but wonder why,\n" +
                    "the silent answer again I cry.\n" +
                    "Perhaps this time I shall say goodbye;\n" +
                    "a letter nobody can reply—\n" +
                    "as face my worst fear,\n"
            },{
                key: 'more',
                label: 'And more!',
                lang: 'en',
                version: 'unused',
                title: 'This section is in development.',
                content:
                    "There will be more to explore soon."
            }

        ],
        version: 'unused'
    }
}

function es() {
    return {
        entries: [
            {
                key: 'I_d1',
                label: '"I" — Borrador ejemplo',
                lang: 'en',
                version: 'unused',
                title: 'I',
                content:
                    "The long way walking, by darkness nigh;\n" +
                    "in the company of stark nothing.\n" +
                    "As I rehearsed the next morning lie,\n" +
                    "invited felt, the voice of something—\n" +
                    "to preach to my ear, the end of I.\n" +
                    "\n" +
                    "The millionth gaze at the umber sky,\n" +
                    "\"the truth up there is just as numbing.\"\n" +
                    "The voice sees beyond what meets the eye,\n" +
                    "and speaks words with the sharpest cunning—\n" +
                    "preaching to my ear, the end of I.\n" +
                    "\n" +
                    "Dare I want silence, it would comply;\n" +
                    "the voice can wait for later coming.\n" +
                    "Through my very sight it would imply\n" +
                    "A message certain, unbecoming—\n" +
                    "that soon shall be here, the end of I.\n" +
                    "\n" +
                    "And I deny it, oh, I deny;\n" +
                    "To trust my morning lies, oh, I try.\n" +
                    "But with the night comes a somber sky,\n" +
                    "and it can quickly tell my bluffing—\n" +
                    "a sign of how near, the end of I.\n" +
                    "\n" +
                    "So what is left now, but wonder why,\n" +
                    "the silent answer again I cry.\n" +
                    "Perhaps this time I shall say goodbye;\n" +
                    "a letter nobody can reply—\n" +
                    "as face my worst fear,\n"
            },{
                key: 'more',
                label: 'Y más!',
                lang: 'es',
                version: 'unused',
                title: 'Esta sección está en desarrollo.',
                content:
                    "Pronto habrá más para explorar."
            }

        ],
        version: 'unused'
    }
}