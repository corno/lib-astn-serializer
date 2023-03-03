import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "createApostrophedStringSerializer": algorithm(functionReference("this", {}, "SerializeString"), constructor(null, {
            "escapeString": functionReference("escape", {}, "EscapeString")
        })),
        "createMultilineStringSerializer": algorithm(functionReference("this", {}, "SerializeMultilineString"), constructor(null, {
            "escapeMultilineString": functionReference("escape", {}, "EscapeMultilineString")
        })),
        "createNonWrappedStringSerializer": algorithm(functionReference("this", {}, "SerializeString"), constructor(null, {
            "escapeString": functionReference("escape", {}, "EscapeString")
        })),
        "createQuotedStringSerializer": algorithm(functionReference("this", {}, "SerializeString"), constructor(null, {
            "escapeString": functionReference("escape", {}, "EscapeString")
        })),
        "createAnnotater": algorithm(functionReference("this", {}, "CreateAnnotater")),
        "createASTNNormalizer": algorithm(functionReference("this", {}, "NormalizeASTN"), constructor(typeReference("this", {}, "SerializerConfigurationData"), {
            "serializeApostrophedString": functionReference("this", {}, "SerializeString"),
            "serializeMultilineString": functionReference("this", {}, "SerializeMultilineString"),
            "serializeNonWrappedString": functionReference("this", {}, "SerializeString"),
            "serializeQuotedString": functionReference("this", {}, "SerializeString"),
        })),
        "createJSONFormatter": algorithm(functionReference("this", {}, "FormatJSON"), constructor(typeReference("this", {}, "SerializerConfigurationData"), {
            "escapeString": functionReference("escape", {}, "EscapeString"),
            "serializeNonWrappedString": functionReference("this", {}, "SerializeString"),
            "serializeQuotedString": functionReference("this", {}, "SerializeString"),
            "join": functionReference("tostring", {}, "JoinStringArray")
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
}