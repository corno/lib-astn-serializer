import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_h from "glo-astn-handlers"

export namespace T {
    
    export type Annotation<GAnnotation> = GAnnotation
    
    export namespace NonTokenFormatInstruction {
        
        export type _lstring<GAnnotation> = string
    }
    
    export type NonTokenFormatInstruction<GAnnotation> = {
        readonly 'string': string
    }
    
    export namespace SerializeMultilineStringData {
        
        export type indentation<GAnnotation> = string
        
        export namespace lines {
            
            export type A<GAnnotation> = string
        }
        
        export type lines<GAnnotation> = pt.Array<string>
    }
    
    export type SerializeMultilineStringData<GAnnotation> = {
        readonly 'indentation': string
        readonly 'lines': pt.Array<string>
    }
    
    export namespace SerializerConfigurationData {
        
        export type indentationString<GAnnotation> = string
        
        export type newline<GAnnotation> = string
    }
    
    export type SerializerConfigurationData<GAnnotation> = {
        readonly 'indentationString': string
        readonly 'newline': string
    }
    
    export namespace StackContext {
        
        export type dictionaryDepth<GAnnotation> = number
        
        export type listDepth<GAnnotation> = number
        
        export type shorthandGroupDepth<GAnnotation> = number
        
        export type taggedUnionDepth<GAnnotation> = number
        
        export type verboseGroupDepth<GAnnotation> = number
    }
    
    export type StackContext<GAnnotation> = {
        readonly 'dictionaryDepth': number
        readonly 'listDepth': number
        readonly 'shorthandGroupDepth': number
        readonly 'taggedUnionDepth': number
        readonly 'verboseGroupDepth': number
    }
    
    export namespace TokenData {
        
        export type annotation<GAnnotation> = GAnnotation
        
        export type instruction<GAnnotation> = T.TokenFormatInstruction<GAnnotation>
    }
    
    export type TokenData<GAnnotation> = {
        readonly 'annotation': GAnnotation
        readonly 'instruction': T.TokenFormatInstruction<GAnnotation>
    }
    
    export namespace TokenFormatInstruction {
        
        export type stringAfter<GAnnotation> = string
        
        export type stringBefore<GAnnotation> = string
        
        export type token<GAnnotation> = string
    }
    
    export type TokenFormatInstruction<GAnnotation> = {
        readonly 'stringAfter': string
        readonly 'stringBefore': string
        readonly 'token': string
    }
}