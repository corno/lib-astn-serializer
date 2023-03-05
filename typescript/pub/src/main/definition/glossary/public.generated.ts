import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_h from "glo-astn-handlers"

export namespace I {
    
    export type AnnotatedHandler<GAnnotation> = {
        'data': {
            'arrayBegin': () => void
            'arrayEnd': () => void
            'element': () => void
            'multilineStringValue': () => void
            'objectBegin': () => void
            'objectEnd': () => void
            'option': () => void
            'property': () => void
            'simpleStringValue': () => void
            'taggedUnionBegin': () => void
            'taggedUnionEnd': () => void
        }
        'end': () => void
    }
}

export namespace B {}

export namespace F {
    
    export type CreateAnnotater = <GAnnotation>($: g_common.T.Null,) => void
    
    export type FormatJSON = <GAnnotation>($: g_common.T.Null,) => I.AnnotatedHandler<GAnnotation>
    
    export type NormalizeASTN = <GAnnotation>($: g_common.T.Null,) => I.AnnotatedHandler<GAnnotation>
    
    export type SerializeMultilineString = <GAnnotation>($: T.SerializeMultilineStringData<GAnnotation>,) => g_common.T.String
    
    export type SerializeString = <GAnnotation>($: g_common.T.String,) => g_common.T.String
}