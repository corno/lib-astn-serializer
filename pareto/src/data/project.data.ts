import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.wrapRawDictionary

import { $ as api } from "./api.data"
import { $ as dummyHandlers } from "./submodules/dummyHandlers/moduleDefinition.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "serialize an ASTN data structure (to ASTN or JSON)",
    'license': "ISC",

    'dependencies': d({
        "glo-astn-handlers": {},
        "lib-astn-dummyhandlers": {},
        "res-astn-escape-string": {},
        "tostring": {}
    }),
    'type': ['library', {
        'main': {
            'definition': api,
        },
        'submodules': d({
            "dummyHandlers": {
                'definition': dummyHandlers
            }
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}