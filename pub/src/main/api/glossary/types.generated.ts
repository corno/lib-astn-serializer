import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GSerializeMultilineStringData {
    
    export namespace Plines {}
    export type Plines = pt.Array<string>
}
export type GSerializeMultilineStringData = {
    readonly 'indentation': string
    readonly 'lines': GSerializeMultilineStringData.Plines
}
export type USerializeMultilineStringData = GSerializeMultilineStringData