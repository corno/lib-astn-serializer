import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace SerializeMultilineStringData {
        
        export type indentation = string
        
        export namespace lines {
            
            export type A = string
        }
        
        export type lines = pt.Array<string>
    }
    
    export type SerializeMultilineStringData = {
        readonly 'indentation': string
        readonly 'lines': pt.Array<string>
    }
}