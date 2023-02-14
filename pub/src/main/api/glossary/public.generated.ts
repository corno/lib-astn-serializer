import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mh from "glo-astn-handlers"

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

export type FCreateAnnotater = <GPAnnotation>($: mcommon.T.Null,) => void

export type FFormatJSON = <GPAnnotation>($: mcommon.T.Null,) => IAnnotatedHandler<GPAnnotation>

export type FNormalizeASTN = <GPAnnotation>($: mcommon.T.Null,) => IAnnotatedHandler<GPAnnotation>

export type FSerializeMultilineString = <GPAnnotation>($: T.SerializeMultilineStringData<GPAnnotation>,) => mcommon.T.String

export type FSerializeString = <GPAnnotation>($: mcommon.T.String,) => mcommon.T.String