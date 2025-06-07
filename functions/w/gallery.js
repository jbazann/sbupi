export async function onRequestGet(context) {
    const response = { // TODO data store
        entries: [
            {
                key: 'I_d1',
                label: '"I" — Sample draft',
                version: 'unused',
                title: 'I',
                content:
                    "The long way walking, by darkness nigh;\n" +
                    "Unworthy day, with soul of nothing.\n" +
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
            }
        ],
        version: 'unused'
    }, headers = new Headers()
    headers.set('Content-Type','application/json')
    return new Response(JSON.stringify(response),{headers});
}