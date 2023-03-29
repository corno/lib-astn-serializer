import * as pd from 'pareto-core-data'

import { algorithm, constructor, data, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createApostrophedStringSerializer": algorithm(sfunction("this", {}, "SerializeString"), {}, dependent(null, {
            "escapeString": sfunction("escape", {}, "EscapeString"),
        }, {})),
        "createMultilineStringSerializer": algorithm(sfunction("this", {}, "SerializeMultilineString"), {}, dependent(null, {
            "escapeMultilineString": sfunction("escape", {}, "EscapeMultilineString"),
        }, {})),
        "createNonWrappedStringSerializer": algorithm(sfunction("this", {}, "SerializeString"), {}, dependent(null, {
            "escapeString": sfunction("escape", {}, "EscapeString"),
        }, {})),
        "createQuotedStringSerializer": algorithm(sfunction("this", {}, "SerializeString"), {}, dependent(null, {
            "escapeString": sfunction("escape", {}, "EscapeString"),
        }, {})),
        "createAnnotater": algorithm(constructor("this", {}, "CreateAnnotater")),
        "createASTNNormalizer": algorithm(sfunction("this", {}, "NormalizeASTN"), {}, dependent(data("this", {}, "SerializerConfigurationData"), {
            "serializeApostrophedString": sfunction("this", {}, "SerializeString"),
            "serializeMultilineString": sfunction("this", {}, "SerializeMultilineString"),
            "serializeNonWrappedString": sfunction("this", {}, "SerializeString"),
            "serializeQuotedString": sfunction("this", {}, "SerializeString"),
        }, {})),
        "createJSONFormatter": algorithm(sfunction("this", {}, "FormatJSON"), {}, dependent(data("this", {}, "SerializerConfigurationData"), {
            "escapeString": sfunction("escape", {}, "EscapeString"),
            "serializeNonWrappedString": sfunction("this", {}, "SerializeString"),
            "serializeQuotedString": sfunction("this", {}, "SerializeString"),
            "join": sfunction("tostring", {}, "JoinStringArray"),
        }, {})),
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