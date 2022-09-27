import * as pt from "pareto-core-types"

import * as escape from "api-astn-escape-string"

import * as api from "../../interface"

export function createSerializedMultilineString(
    $: {
        lines: pt.Array<string>,
        indentation: string,
    },
    $d: {
        escapeMultilineString: escape.FEscapeMultilineString
    }
): string {
    //don't escape tabs, newlines!
    return `\`${$d.escapeMultilineString($)}\``
}

export function createSerializedApostrophedString(
    $: string,
    $d: {
        escapeString: escape.FEscapeString
    }
): string {
    return `'${$d.escapeString({
        str: $,
        escapeTabsAndNewLines: true,
        wrapperToEscape: "'",
    })}'`
}

export function createSerializedQuotedString(
    $: string,
    $d: {
        escapeString: escape.FEscapeString
    }
): string {
    return `"${$d.escapeString({
        str: $,
        escapeTabsAndNewLines: true,
        wrapperToEscape: "\"",
    })}"`
}

export function createSerializedNonWrappedString(
    $: string,
    $d: {
        escapeString: escape.FEscapeString
    }
): string {
    return $d.escapeString({
        str: $,
        escapeTabsAndNewLines: false,
        wrapperToEscape: null,
    })
}
