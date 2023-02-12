import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcommon from "glo-pareto-common"
import * as mescape from "res-astn-escape-string"

export type CcreateAnnotater = glo.FCreateAnnotater

export type CcreateApostrophedStringSerializer = ($d: {
    readonly 'escapeString': mescape.FEscapeString
}) => glo.FSerializeString

export type CcreateASTNNormalizer = ($: glo.T.SerializerConfigurationData, $d: {
    readonly 'serializeApostrophedString': glo.FSerializeString
    readonly 'serializeMultilineString': glo.FSerializeMultilineString
    readonly 'serializeNonWrappedString': glo.FSerializeString
    readonly 'serializeQuotedString': glo.FSerializeString
}) => glo.FNormalizeASTN

export type CcreateJSONFormatter = ($: glo.T.SerializerConfigurationData, $d: {
    readonly 'serializeNonWrappedString': glo.FSerializeString
    readonly 'serializeQuotedString': glo.FSerializeString
}) => glo.FFormatJSON

export type CcreateMultilineStringSerializer = ($d: {
    readonly 'escapeMultilineString': mescape.FEscapeMultilineString
}) => glo.FSerializeMultilineString

export type CcreateNonWrappedStringSerializer = ($d: {
    readonly 'escapeString': mescape.FEscapeString
}) => glo.FSerializeString

export type CcreateQuotedStringSerializer = ($d: {
    readonly 'escapeString': mescape.FEscapeString
}) => glo.FSerializeString

export type API = {
    createAnnotater: CcreateAnnotater
    createApostrophedStringSerializer: CcreateApostrophedStringSerializer
    createASTNNormalizer: CcreateASTNNormalizer
    createJSONFormatter: CcreateJSONFormatter
    createMultilineStringSerializer: CcreateMultilineStringSerializer
    createNonWrappedStringSerializer: CcreateNonWrappedStringSerializer
    createQuotedStringSerializer: CcreateQuotedStringSerializer
}