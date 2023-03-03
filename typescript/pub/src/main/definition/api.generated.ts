import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gescape from "res-astn-escape-string"
import * as gthis from "./glossary"
import * as gtostring from "res-pareto-tostring"

export type CcreateAnnotater = gthis.FCreateAnnotater

export type CcreateApostrophedStringSerializer = ($d: {
    readonly 'escapeString': gescape.FEscapeString
}) => gthis.FSerializeString

export type CcreateASTNNormalizer = ($: gthis.T.SerializerConfigurationData, $d: {
    readonly 'serializeApostrophedString': gthis.FSerializeString
    readonly 'serializeMultilineString': gthis.FSerializeMultilineString
    readonly 'serializeNonWrappedString': gthis.FSerializeString
    readonly 'serializeQuotedString': gthis.FSerializeString
}) => gthis.FNormalizeASTN

export type CcreateJSONFormatter = ($: gthis.T.SerializerConfigurationData, $d: {
    readonly 'escapeString': gescape.FEscapeString
    readonly 'join': gtostring.FJoinStringArray
    readonly 'serializeNonWrappedString': gthis.FSerializeString
    readonly 'serializeQuotedString': gthis.FSerializeString
}) => gthis.FFormatJSON

export type CcreateMultilineStringSerializer = ($d: {
    readonly 'escapeMultilineString': gescape.FEscapeMultilineString
}) => gthis.FSerializeMultilineString

export type CcreateNonWrappedStringSerializer = ($d: {
    readonly 'escapeString': gescape.FEscapeString
}) => gthis.FSerializeString

export type CcreateQuotedStringSerializer = ($d: {
    readonly 'escapeString': gescape.FEscapeString
}) => gthis.FSerializeString

export type API = {
    createAnnotater: CcreateAnnotater
    createApostrophedStringSerializer: CcreateApostrophedStringSerializer
    createASTNNormalizer: CcreateASTNNormalizer
    createJSONFormatter: CcreateJSONFormatter
    createMultilineStringSerializer: CcreateMultilineStringSerializer
    createNonWrappedStringSerializer: CcreateNonWrappedStringSerializer
    createQuotedStringSerializer: CcreateQuotedStringSerializer
}