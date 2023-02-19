import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    nested,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: mmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': glossary,
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
            "escape": "res-astn-escape-string",
            "tostring": "res-pareto-tostring",
        }),
        'algorithms': d({
            "createApostrophedStringSerializer": algorithm(definitionReference("SerializeString"), constructor(null, {
                "escapeString": definitionReference("escape", {}, "EscapeString")
            })),
            "createMultilineStringSerializer": algorithm(definitionReference("SerializeMultilineString"), constructor(null, {
                "escapeMultilineString": definitionReference("escape", {}, "EscapeMultilineString")
            })),
            "createNonWrappedStringSerializer": algorithm(definitionReference("SerializeString"), constructor(null, {
                "escapeString": definitionReference("escape", {}, "EscapeString")
            })),
            "createQuotedStringSerializer": algorithm(definitionReference("SerializeString"), constructor(null, {
                "escapeString": definitionReference("escape", {}, "EscapeString")
            })),
            "createAnnotater": algorithm(definitionReference("CreateAnnotater")),
            "createASTNNormalizer": algorithm(definitionReference("NormalizeASTN"), constructor(typeReference("SerializerConfigurationData"), {
                "serializeApostrophedString": definitionReference("SerializeString"),
                "serializeMultilineString": definitionReference("SerializeMultilineString"),
                "serializeNonWrappedString": definitionReference("SerializeString"),
                "serializeQuotedString": definitionReference("SerializeString"),
            })),
            "createJSONFormatter": algorithm(definitionReference("FormatJSON"), constructor(typeReference("SerializerConfigurationData"), {
                "escapeString": definitionReference("escape", {}, "EscapeString"),
                "serializeNonWrappedString": definitionReference("SerializeString"),
                "serializeQuotedString": definitionReference("SerializeString"),
                "join": definitionReference("tostring", {}, "JoinStringArray")
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
