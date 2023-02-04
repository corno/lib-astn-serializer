import * as pr from 'pareto-core-raw'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    nested,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

import { $ as glossary } from "./glossary.data"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': glossary,
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
            "escape": "res-astn-escape-string",
        }),
        'algorithms': d({
            "createApostrophedStringSerializer": algorithm(definitionReference("SerializeString"), constructor(null, {
                "escapeString": definitionReference("escape", "EscapeString")
            })),
            "createMultilineStringSerializer": algorithm(definitionReference("SerializeMultilineString"), constructor(null, {
                "escapeMultilineString": definitionReference("escape", "EscapeMultilineString")
            })),
            "createNonWrappedStringSerializer": algorithm(definitionReference("SerializeString"), constructor(null, {
                "escapeString": definitionReference("escape", "EscapeString")
            })),
            "createQuotedStringSerializer": algorithm(definitionReference("SerializeString"), constructor(null, {
                "escapeString": definitionReference("escape", "EscapeString")
            })),
            "createAnnotater": algorithm(definitionReference("CreateAnnotater")),
            "createASTNNormalizer": algorithm(definitionReference("NormalizeASTN"), constructor(typeReference("SerializerConfigurationData"), {
                "serializeApostrophedString": definitionReference("SerializeString"),
                "serializeMultilineString": definitionReference("SerializeMultilineString"),
                "serializeNonWrappedString": definitionReference("SerializeString"),
                "serializeQuotedString": definitionReference("SerializeString"),
            })),
            "createJSONFormatter": algorithm(definitionReference("FormatJSON"), constructor(typeReference("SerializerConfigurationData"), {
                "serializeApostrophedString": definitionReference("SerializeString"),
                "serializeMultilineString": definitionReference("SerializeMultilineString"),
                "serializeNonWrappedString": definitionReference("SerializeString"),
                "serializeQuotedString": definitionReference("SerializeString"),
            })),
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

        })
    },
}
