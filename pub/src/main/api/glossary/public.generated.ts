import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FSerializeMultilineString = ($: T.SerializeMultilineStringData,) => mcommon.T.String

export type FSerializeString = ($: mcommon.T.String,) => mcommon.T.String