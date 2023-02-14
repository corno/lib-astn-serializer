import { TStackContext } from "../types/StackContext.p"

import * as h from "glo-astn-handlers"

export type IAnnotatedHandler<PAnnotation> = {
    readonly "objectBegin": ($: {
        readonly "token": h.T.OpenObjectToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "property": ($: {
        readonly "propertyToken": h.T.SimpleStringToken<PAnnotation>
        readonly "objectToken": h.T.OpenObjectToken<PAnnotation>
        readonly "stackContext": TStackContext
        readonly "isFirst": boolean
    }) => void
    readonly "objectEnd": ($: {
        readonly "openToken": h.T.OpenObjectToken<PAnnotation>
        readonly "token": h.T.CloseObjectToken<PAnnotation>
        readonly "stackContext": TStackContext
        readonly "isEmpty": boolean
    }) => void
    readonly "arrayBegin": ($: {
        readonly "token": h.T.OpenArrayToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "element": ($: {
        readonly "arrayToken": h.T.OpenArrayToken<PAnnotation>
        readonly "stackContext": TStackContext
        readonly "isFirst": boolean
    }) => void
    readonly "arrayEnd": ($: {
        readonly "openToken": h.T.OpenArrayToken<PAnnotation>
        readonly "token": h.T.CloseArrayToken<PAnnotation>
        readonly "stackContext": TStackContext
        readonly "isEmpty": boolean
    }) => void
    readonly "simpleStringValue": ($: {
        readonly "token": h.T.SimpleStringToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "multilineStringValue": ($: {
        readonly "token": h.T.MultilineStringToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "taggedUnionBegin": ($: {
        readonly "token": h.T.TaggedUnionToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "option": ($: {
        readonly "token": h.T.SimpleStringToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "taggedUnionEnd": ($: {
        readonly "stackContext": TStackContext
    }) => void
    readonly "end": () => void
}