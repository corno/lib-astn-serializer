import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "serialize an ASTN data structure (to ASTN or JSON)",
    'license': "TBD",

    'dependencies': d({
        "glo-astn-handlers": null,
        "lib-astn-dummyhandlers": null,
        "res-astn-escape-string": null,
        "tostring": null,
    }),
    'type': ['library', {
        'main': {
            'definition': {
                'glossary': {
                    'root': glossary,
                    'imports': d({
                        "common": external("glo-pareto-common"),
                        "h": external("glo-astn-handlers"),
                    }),
                },
                'api': {
                    'root': api,
                    'imports': d({
                        "common": external("glo-pareto-common"),
                        "escape": external("res-astn-escape-string"),
                        "tostring": external("res-pareto-tostring"),
                        "this": this_(),
                    }),
                }
            },
            'implementation': ['typescript', null],
        },
        'submodules': d({}),
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
            'imports': d({}),
        }
    }],
}