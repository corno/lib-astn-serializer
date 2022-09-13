import { EscapeMultilineString, EscapeString } from "astn-serialize-string-api"

export function createSerializedMultilineString(
    $: {
        lines: string[],
        indentation: string,
    },
    $d: {
        escapeMultilineString: EscapeMultilineString
    }
): string {
    //don't escape tabs, newlines!
    return `\`${$d.escapeMultilineString($)}\``
}

export function createSerializedApostrophedString(
    str: string,
    $d: {
        escapeString: EscapeString
    }
): string {
    return `'${$d.escapeString({
        str: str,
        escapeTabsAndNewLines: true,
        wrapperToEscape: "'",
    })}'`
}

export function createSerializedQuotedString(
    str: string,
    $d: {
        escapeString: EscapeString
    }
): string {
    return `"${$d.escapeString({
        str: str,
        escapeTabsAndNewLines: true,
        wrapperToEscape: "\"",
    })}"`
}

export function createSerializedNonWrappedString(
    str: string,
    $d: {
        escapeString: EscapeString
    }
): string {
    return $d.escapeString({
        str: str,
        escapeTabsAndNewLines: false,
        wrapperToEscape: null,
    })
}
