import * as pd from 'pareto-core-data'

import {algorithm, dependent, sconstructor, sfunction, sFunctionReference, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createApostrophedStringSerializer": algorithm(sfunction("this", {}, "SerializeString"), dependent(null, {
            "escapeString": sFunctionReference("escape", {}, "EscapeString"),
        }, {})),
        "createMultilineStringSerializer": algorithm(sfunction("this", {}, "SerializeMultilineString"), dependent(null, {
            "escapeMultilineString": sFunctionReference("escape", {}, "EscapeMultilineString"),
        }, {})),
        "createNonWrappedStringSerializer": algorithm(sfunction("this", {}, "SerializeString"), dependent(null, {
            "escapeString": sFunctionReference("escape", {}, "EscapeString"),
        }, {})),
        "createQuotedStringSerializer": algorithm(sfunction("this", {}, "SerializeString"), dependent(null, {
            "escapeString": sFunctionReference("escape", {}, "EscapeString"),
        }, {})),
        "createAnnotater": algorithm(sconstructor("this", {}, "CreateAnnotater")),
        "createASTNNormalizer": algorithm(sfunction("this", {}, "NormalizeASTN"), dependent(typeReference("this", {}, "SerializerConfigurationData"), {
            "serializeApostrophedString": sFunctionReference("this", {}, "SerializeString"),
            "serializeMultilineString": sFunctionReference("this", {}, "SerializeMultilineString"),
            "serializeNonWrappedString": sFunctionReference("this", {}, "SerializeString"),
            "serializeQuotedString": sFunctionReference("this", {}, "SerializeString"),
        }, {})),
        "createJSONFormatter": algorithm(sfunction("this", {}, "FormatJSON"), dependent(typeReference("this", {}, "SerializerConfigurationData"), {
            "escapeString": sFunctionReference("escape", {}, "EscapeString"),
            "serializeNonWrappedString": sFunctionReference("this", {}, "SerializeString"),
            "serializeQuotedString": sFunctionReference("this", {}, "SerializeString"),
            "join": sFunctionReference("tostring", {}, "JoinStringArray"),
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