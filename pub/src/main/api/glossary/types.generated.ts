import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mh from "glo-astn-handlers"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace NonTokenFormatInstruction {
        
        export type _lstring<GPAnnotation> = string
    }
    
    export type NonTokenFormatInstruction<GPAnnotation> = {
        readonly 'string': string
    }
    
    export namespace SerializeMultilineStringData {
        
        export type indentation<GPAnnotation> = string
        
        export namespace lines {
            
            export type A<GPAnnotation> = string
        }
        
        export type lines<GPAnnotation> = pt.Array<string>
    }
    
    export type SerializeMultilineStringData<GPAnnotation> = {
        readonly 'indentation': string
        readonly 'lines': pt.Array<string>
    }
    
    export namespace SerializerConfigurationData {
        
        export type indentationString<GPAnnotation> = string
        
        export type newline<GPAnnotation> = string
    }
    
    export type SerializerConfigurationData<GPAnnotation> = {
        readonly 'indentationString': string
        readonly 'newline': string
    }
    
    export namespace StackContext {
        
        export type dictionaryDepth<GPAnnotation> = number
        
        export type listDepth<GPAnnotation> = number
        
        export type shorthandGroupDepth<GPAnnotation> = number
        
        export type taggedUnionDepth<GPAnnotation> = number
        
        export type verboseGroupDepth<GPAnnotation> = number
    }
    
    export type StackContext<GPAnnotation> = {
        readonly 'dictionaryDepth': number
        readonly 'listDepth': number
        readonly 'shorthandGroupDepth': number
        readonly 'taggedUnionDepth': number
        readonly 'verboseGroupDepth': number
    }
    
    export namespace TokenData {
        
        export type annotation<GPAnnotation> = GPAnnotation
        
        export type instruction<GPAnnotation> = T.TokenFormatInstruction<GPAnnotation>
    }
    
    export type TokenData<GPAnnotation> = {
        readonly 'annotation': GPAnnotation
        readonly 'instruction': T.TokenFormatInstruction<GPAnnotation>
    }
    
    export namespace TokenFormatInstruction {
        
        export type stringAfter<GPAnnotation> = string
        
        export type stringBefore<GPAnnotation> = string
        
        export type token<GPAnnotation> = string
    }
    
    export type TokenFormatInstruction<GPAnnotation> = {
        readonly 'stringAfter': string
        readonly 'stringBefore': string
        readonly 'token': string
    }
}