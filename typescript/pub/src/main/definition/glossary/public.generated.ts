import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gh from "glo-astn-handlers"

export type IAnnotatedHandler<GPAnnotation> = {
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

export type IFormatInstructionWriter<GPAnnotation> = {
    'token': ($: T.TokenData<GPAnnotation>, ) => void
}

export type FCreateAnnotater = <GPAnnotation>($: gcommon.T.Null,) => void

export type FFormatJSON = <GPAnnotation>($: gcommon.T.Null,) => IAnnotatedHandler<GPAnnotation>

export type FNormalizeASTN = <GPAnnotation>($: gcommon.T.Null,) => IAnnotatedHandler<GPAnnotation>

export type FSerializeMultilineString = <GPAnnotation>($: T.SerializeMultilineStringData<GPAnnotation>,) => gcommon.T.String

export type FSerializeString = <GPAnnotation>($: gcommon.T.String,) => gcommon.T.String