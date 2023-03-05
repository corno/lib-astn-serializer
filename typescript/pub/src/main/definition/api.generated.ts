import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_escape from "res-astn-escape-string"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"

export type createAnnotater = g_this.F.CreateAnnotater

export type createApostrophedStringSerializer = ($d: {
    readonly 'escapeString': g_escape.F.EscapeString
}) => g_this.F.SerializeString

export type createASTNNormalizer = ($: g_this.T.SerializerConfigurationData, $d: {
    readonly 'serializeApostrophedString': g_this.F.SerializeString
    readonly 'serializeMultilineString': g_this.F.SerializeMultilineString
    readonly 'serializeNonWrappedString': g_this.F.SerializeString
    readonly 'serializeQuotedString': g_this.F.SerializeString
}) => g_this.F.NormalizeASTN

export type createJSONFormatter = ($: g_this.T.SerializerConfigurationData, $d: {
    readonly 'escapeString': g_escape.F.EscapeString
    readonly 'join': g_tostring.F.JoinStringArray
    readonly 'serializeNonWrappedString': g_this.F.SerializeString
    readonly 'serializeQuotedString': g_this.F.SerializeString
}) => g_this.F.FormatJSON

export type createMultilineStringSerializer = ($d: {
    readonly 'escapeMultilineString': g_escape.F.EscapeMultilineString
}) => g_this.F.SerializeMultilineString

export type createNonWrappedStringSerializer = ($d: {
    readonly 'escapeString': g_escape.F.EscapeString
}) => g_this.F.SerializeString

export type createQuotedStringSerializer = ($d: {
    readonly 'escapeString': g_escape.F.EscapeString
}) => g_this.F.SerializeString

export type API = {
    createAnnotater: createAnnotater
    createApostrophedStringSerializer: createApostrophedStringSerializer
    createASTNNormalizer: createASTNNormalizer
    createJSONFormatter: createJSONFormatter
    createMultilineStringSerializer: createMultilineStringSerializer
    createNonWrappedStringSerializer: createNonWrappedStringSerializer
    createQuotedStringSerializer: createQuotedStringSerializer
}