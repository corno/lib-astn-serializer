import * as pr from 'pareto-core-raw'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pr.wrapRawDictionary

export const $: mglossary.TGlossary = {
    'imports': d({
        "common": "glo-pareto-common",
    }),
    'parameters': d({}),
    'templates': d({}),
    'types': types({
        "SerializeMultilineStringData": group({
            "lines": member(array(string())),
            "indentation": member(string()),
        }),
    }),
    'interfaces': d({
    }),
    'functions': d({
        "SerializeMultilineString": func(typeReference("SerializeMultilineStringData"), null, null, data(typeReference("common", "String"), false)),
        "SerializeString": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"), false)),

        // export type FCreateAnnotater = <PAnnotation> (
        //     $i: IAnnotatedHandler<PAnnotation>,
        // ) => th.ITreeHandler<PAnnotation>
        
        // export type FCreateASTNNormalizer = <PAnnotation>(
        //     $: {
        //         readonly "indentationString": string
        //         readonly "newline": string
        //     },
        //     $i: {
        //         readonly "writer": IFormatInstructionWriter<PAnnotation>
        //         readonly "onEnd": () => void
        //     },
        //     $d: {
        //         readonly "escapeString": escape.FEscapeString
        //         readonly "escapeMultilineString": escape.FEscapeMultilineString
        //     }
        // ) => IAnnotatedHandler<PAnnotation>
        
        
        // export type FCreateJSONFormatter = <PAnnotation>(
        //     $: {
        //         readonly "indentationString": string,
        //         readonly "newline": string,
        //     },
        //     $i: {
        //         readonly "writer": IFormatInstructionWriter<PAnnotation>,
        //         readonly "onEnd": () => void,
        //     },
        //     $d: {
        //         //readonly "join": (array: pt.Array<string>, spacer: string) => string
        //         readonly "escapeString": escape.FEscapeString
        //     }
        // ) => IAnnotatedHandler<PAnnotation>
        
    }),
}