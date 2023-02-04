import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TSerializeMultilineStringData = t.USerializeMultilineStringData

export type FSerializeMultilineString = ($: TSerializeMultilineStringData,) => mcommon.TString

export type FSerializeString = ($: mcommon.TString,) => mcommon.TString