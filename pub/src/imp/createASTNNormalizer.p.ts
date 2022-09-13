import * as pl from "pareto-core-lib"

import * as stringSerialization from "./stringSerialization"

import * as h from "astn-handlers-api"
import * as api from "../interface"
import { EscapeMultilineString, EscapeString } from "astn-serialize-string-api"

export function createASTNNormalizer<Annotation>(
    $: {
        indentationString: string
        newline: string
    },
    $i: {
        writer: api.IFormatInstructionWriter<Annotation>
    },
    $d: {
        escapeString: EscapeString
        escapeMultilineString: EscapeMultilineString
    }
): api.IAnnotatedHandler<Annotation> {

    function createIndentation(context: api.StackContext) {
        const depth = context.dictionaryDepth + context.verboseGroupDepth + context.listDepth
        let indentation = $.newline
        for (let x = 0; x !== depth; x += 1) {
            indentation += $.indentationString
        }
        return indentation
    }
    return {
        objectBegin: ($) => {
            $i.writer.token(
                {
                    stringBefore: ``,
                    token: `${$.token.token.type[0] === "verbose group" ? "(" : "{"}`,
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },
        property: ($) => {
            $i.writer.token(
                {
                    stringBefore: `${createIndentation($.stackContext)}`,
                    token: ((): string => {
                        switch ($.objectToken.token.type[0]) {
                            case "verbose group": {
                                return stringSerialization.createSerializedApostrophedString(
                                    $.propertyToken.token.value,
                                    {
                                        escapeString: $d.escapeString
                                    }
                                )
                            }
                            case "dictionary": {
                                return stringSerialization.createSerializedQuotedString(
                                    $.propertyToken.token.value,
                                    {
                                        escapeString: $d.escapeString
                                    }
                                )
                            }
                            default:
                                return pl.au($.objectToken.token.type[0])
                        }
                    })(),
                    stringAfter: `: `,
                },
                $.propertyToken.annotation,
            )
        },
        objectEnd: ($) => {
            $i.writer.token(
                {
                    stringBefore: $.isEmpty ? ` ` : `${createIndentation($.stackContext)}`,
                    token: `${$.openToken.token.type[0] === "verbose group" ? ")" : "}"}`,
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },

        arrayBegin: ($) => {
            $i.writer.token(
                {
                    stringBefore: ``,
                    token: `${$.token.token.type[0] === "shorthand group" ? "<" : "["}`,
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },
        element: ($) => {
            $i.writer.nonToken(
                {
                    string: $.arrayToken.token.type[0] === "shorthand group"
                        ? ` `
                        : `${createIndentation($.stackContext)}`,
                },
            )
        },
        arrayEnd: ($) => {
            $i.writer.token(
                {
                    stringBefore: $.openToken.token.type[0] === "shorthand group"
                        ? ` `
                        : $.isEmpty ? ` ` : `${createIndentation($.stackContext)}`,
                    token: $.openToken.token.type[0] === "shorthand group"
                        ? `>`
                        : `]`,
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },

        simpleStringValue: ($) => {
            function serializeSimpleString(
                $: h.SimpleString,
            ): string {
                switch ($.wrapping[0]) {
                    case "none": {
                        return stringSerialization.createSerializedNonWrappedString(
                            $.value,
                            {
                                escapeString: $d.escapeString
                            }
                        )
                    }
                    case "quote": {
                        return stringSerialization.createSerializedQuotedString(
                            $.value,
                            {
                                escapeString: $d.escapeString
                            }
                        )
                    }
                    case "apostrophe": {
                        return stringSerialization.createSerializedApostrophedString(
                            $.value
                            ,
                            {
                                escapeString: $d.escapeString
                            }
                        )
                    }
                    default:
                        return pl.au($.wrapping[0])
                }
            }
            $i.writer.token(
                {
                    stringBefore: ``,
                    token: serializeSimpleString(
                        $.token.token,
                    ),
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },
        multilineStringValue: ($) => {
            $i.writer.token(
                {
                    stringBefore: ``,
                    token: stringSerialization.createSerializedMultilineString(
                        {
                            lines: $.token.token.lines,
                            indentation: createIndentation($.stackContext),
                        },
                        {
                            escapeMultilineString: $d.escapeMultilineString
                        }
                    ),
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },

        taggedUnionBegin: ($) => {
            $i.writer.token(
                {
                    stringBefore: ``,
                    token: `|`,
                    stringAfter: ` `,
                },
                $.token.annotation,
            )
        },
        option: ($) => {
            $i.writer.token(
                {
                    stringBefore: ``,
                    token: stringSerialization.createSerializedApostrophedString(
                        $.token.token.value,
                        {
                            escapeString: $d.escapeString,
                        }
                    ),
                    stringAfter: ` `,
                },
                $.token.annotation,
            )
        },
        taggedUnionEnd: ($) => {
            $i.writer.nonToken(
                {
                    string: ``,
                },
            )
        },
        end: () => {
            $i.writer.nonToken({
                string: $.newline,
            })
        },
    }
}
