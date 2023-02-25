import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcommon from "glo-pareto-common"
import * as gescape from "res-astn-escape-string"
import * as gtostring from "res-pareto-tostring"

export type CcreateAnnotater = gglo.FCreateAnnotater

export type CcreateApostrophedStringSerializer = ($d: {
    readonly 'escapeString': gescape.FEscapeString
}) => gglo.FSerializeString

export type CcreateASTNNormalizer = ($: gglo.T.SerializerConfigurationData, $d: {
    readonly 'serializeApostrophedString': gglo.FSerializeString
    readonly 'serializeMultilineString': gglo.FSerializeMultilineString
    readonly 'serializeNonWrappedString': gglo.FSerializeString
    readonly 'serializeQuotedString': gglo.FSerializeString
}) => gglo.FNormalizeASTN

export type CcreateJSONFormatter = ($: gglo.T.SerializerConfigurationData, $d: {
    readonly 'escapeString': gescape.FEscapeString
    readonly 'join': gtostring.FJoinStringArray
    readonly 'serializeNonWrappedString': gglo.FSerializeString
    readonly 'serializeQuotedString': gglo.FSerializeString
}) => gglo.FFormatJSON

export type CcreateMultilineStringSerializer = ($d: {
    readonly 'escapeMultilineString': gescape.FEscapeMultilineString
}) => gglo.FSerializeMultilineString

export type CcreateNonWrappedStringSerializer = ($d: {
    readonly 'escapeString': gescape.FEscapeString
}) => gglo.FSerializeString

export type CcreateQuotedStringSerializer = ($d: {
    readonly 'escapeString': gescape.FEscapeString
}) => gglo.FSerializeString

export type API = {
    createAnnotater: CcreateAnnotater
    createApostrophedStringSerializer: CcreateApostrophedStringSerializer
    createASTNNormalizer: CcreateASTNNormalizer
    createJSONFormatter: CcreateJSONFormatter
    createMultilineStringSerializer: CcreateMultilineStringSerializer
    createNonWrappedStringSerializer: CcreateNonWrappedStringSerializer
    createQuotedStringSerializer: CcreateQuotedStringSerializer
}