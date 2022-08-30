import { StackContext } from "../types/StackContext"
import * as h from "astn-handlers-api"

export type IAnnotatedHandler<Annotation> = {
    objectBegin: ($: {
        token: h.OpenObjectToken<Annotation>
        stackContext: StackContext
    }) => void
    property: ($: {
        propertyToken: h.SimpleStringToken<Annotation>
        objectToken: h.OpenObjectToken<Annotation>
        stackContext: StackContext
        isFirst: boolean
    }) => void
    objectEnd: ($: {
        openToken: h.OpenObjectToken<Annotation>
        token: h.CloseObjectToken<Annotation>
        stackContext: StackContext
        isEmpty: boolean
    }) => void
    arrayBegin: ($: {
        token: h.OpenArrayToken<Annotation>
        stackContext: StackContext
    }) => void
    element: ($: {
        arrayToken: h.OpenArrayToken<Annotation>
        stackContext: StackContext
        isFirst: boolean
    }) => void
    arrayEnd: ($: {
        openToken: h.OpenArrayToken<Annotation>
        token: h.CloseArrayToken<Annotation>
        stackContext: StackContext
        isEmpty: boolean
    }) => void
    simpleStringValue: ($: {
        token: h.SimpleStringToken<Annotation>
        stackContext: StackContext
    }) => void
    multilineStringValue: ($: {
        token: h.MultilineStringToken<Annotation>
        stackContext: StackContext
    }) => void
    taggedUnionBegin: ($: {
        token: h.TaggedUnionToken<Annotation>
        stackContext: StackContext
    }) => void
    option: ($: {
        token: h.SimpleStringToken<Annotation>
        stackContext: StackContext
    }) => void
    taggedUnionEnd: ($: {
        stackContext: StackContext
    }) => void
    end: () => void
}