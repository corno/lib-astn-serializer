import { TStackContext } from "../types/StackContext.p"

import * as h from "api-astn-handlers"

export type IAnnotatedHandler<PAnnotation> = {
    readonly "objectBegin": ($: {
        readonly "token": h.TOpenObjectToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "property": ($: {
        readonly "propertyToken": h.TSimpleStringToken<PAnnotation>
        readonly "objectToken": h.TOpenObjectToken<PAnnotation>
        readonly "stackContext": TStackContext
        readonly "isFirst": boolean
    }) => void
    readonly "objectEnd": ($: {
        readonly "openToken": h.TOpenObjectToken<PAnnotation>
        readonly "token": h.TCloseObjectToken<PAnnotation>
        readonly "stackContext": TStackContext
        readonly "isEmpty": boolean
    }) => void
    readonly "arrayBegin": ($: {
        readonly "token": h.TOpenArrayToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "element": ($: {
        readonly "arrayToken": h.TOpenArrayToken<PAnnotation>
        readonly "stackContext": TStackContext
        readonly "isFirst": boolean
    }) => void
    readonly "arrayEnd": ($: {
        readonly "openToken": h.TOpenArrayToken<PAnnotation>
        readonly "token": h.TCloseArrayToken<PAnnotation>
        readonly "stackContext": TStackContext
        readonly "isEmpty": boolean
    }) => void
    readonly "simpleStringValue": ($: {
        readonly "token": h.TSimpleStringToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "multilineStringValue": ($: {
        readonly "token": h.TMultilineStringToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "taggedUnionBegin": ($: {
        readonly "token": h.TTaggedUnionToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "option": ($: {
        readonly "token": h.TSimpleStringToken<PAnnotation>
        readonly "stackContext": TStackContext
    }) => void
    readonly "taggedUnionEnd": ($: {
        readonly "stackContext": TStackContext
    }) => void
    readonly "end": () => void
}