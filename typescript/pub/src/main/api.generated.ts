import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_escape from "res-astn-escape-string"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"

export namespace D {
    
    
    export type createApostrophedStringSerializer = {
        readonly 'escapeString': g_escape.SYNC.A.F.EscapeString
    }
    
    export type createASTNNormalizer = {
        readonly 'serializeApostrophedString': g_this.SYNC.A.F.SerializeString
        readonly 'serializeMultilineString': g_this.SYNC.A.F.SerializeMultilineString
        readonly 'serializeNonWrappedString': g_this.SYNC.A.F.SerializeString
        readonly 'serializeQuotedString': g_this.SYNC.A.F.SerializeString
    }
    
    export type createJSONFormatter = {
        readonly 'escapeString': g_escape.SYNC.A.F.EscapeString
        readonly 'join': g_tostring.SYNC.A.F.JoinStringArray
        readonly 'serializeNonWrappedString': g_this.SYNC.A.F.SerializeString
        readonly 'serializeQuotedString': g_this.SYNC.A.F.SerializeString
    }
    
    export type createMultilineStringSerializer = {
        readonly 'escapeMultilineString': g_escape.SYNC.A.F.EscapeMultilineString
    }
    
    export type createNonWrappedStringSerializer = {
        readonly 'escapeString': g_escape.SYNC.A.F.EscapeString
    }
    
    export type createQuotedStringSerializer = {
        readonly 'escapeString': g_escape.SYNC.A.F.EscapeString
    }
}

export namespace A {
    
    export type createAnnotater = () => g_this.ASYNC.A.C.CreateAnnotater
    
    export type createApostrophedStringSerializer = ($d: D.createApostrophedStringSerializer, ) => g_this.SYNC.A.F.SerializeString
    
    export type createASTNNormalizer = ($: g_this.T.SerializerConfigurationData, $d: D.createASTNNormalizer, ) => g_this.SYNC.A.F.NormalizeASTN
    
    export type createJSONFormatter = ($: g_this.T.SerializerConfigurationData, $d: D.createJSONFormatter, ) => g_this.SYNC.A.F.FormatJSON
    
    export type createMultilineStringSerializer = ($d: D.createMultilineStringSerializer, ) => g_this.SYNC.A.F.SerializeMultilineString
    
    export type createNonWrappedStringSerializer = ($d: D.createNonWrappedStringSerializer, ) => g_this.SYNC.A.F.SerializeString
    
    export type createQuotedStringSerializer = ($d: D.createQuotedStringSerializer, ) => g_this.SYNC.A.F.SerializeString
}

export type API = {
    readonly 'createAnnotater': A.createAnnotater
    readonly 'createApostrophedStringSerializer': A.createApostrophedStringSerializer
    readonly 'createASTNNormalizer': A.createASTNNormalizer
    readonly 'createJSONFormatter': A.createJSONFormatter
    readonly 'createMultilineStringSerializer': A.createMultilineStringSerializer
    readonly 'createNonWrappedStringSerializer': A.createNonWrappedStringSerializer
    readonly 'createQuotedStringSerializer': A.createQuotedStringSerializer
}