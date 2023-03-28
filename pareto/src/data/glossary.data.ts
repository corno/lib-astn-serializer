import * as pd from 'pareto-core-data'

import {
    array, choice, glossaryParameter, group, imp, member, number, ref, stream, string, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
            "SerializeMultilineStringData": type(group({
                "lines": member(array(string())),
                "indentation": member(string()),
            })),
            "StackContext": type(group({
                "dictionaryDepth": member(number()),
                "verboseGroupDepth": member(number()),
                "listDepth": member(number()),
                "shorthandGroupDepth": member(number()),
                "taggedUnionDepth": member(number()),
            })),
            "SerializerConfigurationData": type(group({
                "indentationString": member(string()),
                "newline": member(string()),
            })),
            "TokenData": type(group({
                "instruction": member(ref(typeReference("TokenFormatInstruction"))),
                "annotation": member(glossaryParameter("Annotation")),
            })),
            "TokenFormatInstruction": type(group({
                "stringBefore": member(string()),
                "token": member(string()),
                "stringAfter": member(string()),
            })),
            "NonTokenFormatInstruction": type(group({
                "string": member(string()),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({
            // export type IAnnotatedHandler<PAnnotation> = {
            //     readonly "objectBegin": ($: {
            //         readonly "token": h.T.OpenObjectToken<PAnnotation>
            //         readonly "stackContext": TStackContext
            //     }) => void
            //     readonly "property": ($: {
            //         readonly "propertyToken": h.T.SimpleStringToken<PAnnotation>
            //         readonly "objectToken": h.T.OpenObjectToken<PAnnotation>
            //         readonly "stackContext": TStackContext
            //         readonly "isFirst": boolean
            //     }) => void
            //     readonly "objectEnd": ($: {
            //         readonly "openToken": h.T.OpenObjectToken<PAnnotation>
            //         readonly "token": h.T.CloseObjectToken<PAnnotation>
            //         readonly "stackContext": TStackContext
            //         readonly "isEmpty": boolean
            //     }) => void
            //     readonly "arrayBegin": ($: {
            //         readonly "token": h.T.OpenArrayToken<PAnnotation>
            //         readonly "stackContext": TStackContext
            //     }) => void
            //     readonly "element": ($: {
            //         readonly "arrayToken": h.T.OpenArrayToken<PAnnotation>
            //         readonly "stackContext": TStackContext
            //         readonly "isFirst": boolean
            //     }) => void
            //     readonly "arrayEnd": ($: {
            //         readonly "openToken": h.T.OpenArrayToken<PAnnotation>
            //         readonly "token": h.T.CloseArrayToken<PAnnotation>
            //         readonly "stackContext": TStackContext
            //         readonly "isEmpty": boolean
            //     }) => void
            //     readonly "simpleStringValue": ($: {
            //         readonly "token": h.T.SimpleStringToken<PAnnotation>
            //         readonly "stackContext": TStackContext
            //     }) => void
            //     readonly "multilineStringValue": ($: {
            //         readonly "token": h.T.MultilineStringToken<PAnnotation>
            //         readonly "stackContext": TStackContext
            //     }) => void
            //     readonly "taggedUnionBegin": ($: {
            //         readonly "token": h.T.TaggedUnionToken<PAnnotation>
            //         readonly "stackContext": TStackContext
            //     }) => void
            //     readonly "option": ($: {
            //         readonly "token": h.T.SimpleStringToken<PAnnotation>
            //         readonly "stackContext": TStackContext
            //     }) => void
            //     readonly "taggedUnionEnd": ($: {
            //         readonly "stackContext": TStackContext
            //     }) => void
            //     readonly "end": () => void
            // }
            // "FormatInstructionWriter": ['group', {
            //     'members': d({
            //         "token": interfaceMethod(typeReference("TokenData")),
            //     }),
            // }]
            // export type IFormatInstructionWriter<PAnnotation> = {
            //     readonly "token": ($: {
            //         readonly "instruction": TTokenFormatInstruction,
            //         readonly "annotation": PAnnotation
            //     }) => void
            //     readonly "nonToken": ($: TNonTokenFormatInstruction) => void
            // }



            // "AnnotatedHandler": stream(
            //     choice({
            //         "objectBegin": interfaceMethod(null),
            //         "property": interfaceMethod(null),
            //         "objectEnd": interfaceMethod(null),
            //         "arrayBegin": interfaceMethod(null),
            //         "element": interfaceMethod(null),
            //         "arrayEnd": interfaceMethod(null),
            //         "simpleStringValue": interfaceMethod(null),
            //         "multilineStringValue": interfaceMethod(null),
            //         "taggedUnionBegin": interfaceMethod(null),
            //         "option": interfaceMethod(null),
            //         "taggedUnionEnd": interfaceMethod(null),
            //     }),
            //     interfaceMethod(null),
            // ),

        }),
        'constructors': d({}),
        'functions': d({

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


            // "SerializeMultilineString": sfunction(data(typeReference("SerializeMultilineStringData")), externalTypeReference("common", "String")),
            // "SerializeString": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"), false)),
            // "NormalizeASTN": func(typeReference("common", "Null"), null, null, inf(interfaceReference("AnnotatedHandler"))),
            // "FormatJSON": func(typeReference("common", "Null"), null, null, inf(interfaceReference("AnnotatedHandler"))),
            // "CreateAnnotater": func(typeReference("common", "Null"), null, null, null),

        }),
    },

}