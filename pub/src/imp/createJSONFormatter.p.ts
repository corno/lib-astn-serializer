import * as pl from "pareto-core-lib"


import * as api from "../interface"
import { EscapeString } from "astn-serialize-string-api"

import { createSerializedNonWrappedString, createSerializedQuotedString } from "./stringSerialization"

export function createJSONFormatter<Annotation>(
    $: {
        indentationString: string,
        newline: string,
    },
    $i: {
        writer: api.IFormatInstructionWriter<Annotation>,
        onEnd: () => void,
    },
    $d: {
        join: (array: string[], spacer: string) => string
        escapeString: EscapeString
    }
): api.IAnnotatedHandler<Annotation> {
    const config = $
    function createIndentation(context: api.StackContext) {
        let indentation = ``
        for (let x = 0; x !== context.dictionaryDepth + context.verboseGroupDepth; x += 1) {
            indentation += $.indentationString
        }
        return indentation
    }
    return {
        objectBegin: ($) => {
            $i.writer.token(
                {
                    stringBefore: ``,
                    token: `{`,
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },
        property: ($) => {
            $i.writer.token(
                {
                    stringBefore: `${$.isFirst ? "" : ","}${config.newline}${createIndentation($.stackContext)}`,
                    token: createSerializedQuotedString(
                        $.propertyToken.token.value,
                        {
                            escapeString: $d.escapeString
                        }
                    ),
                    stringAfter: `: `,
                },
                $.propertyToken.annotation
            )
        },
        objectEnd: ($) => {
            $i.writer.token(
                {
                    stringBefore: $.isEmpty ? ` ` : `${config.newline}${createIndentation($.stackContext)}`,
                    token: `}`,
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },

        arrayBegin: ($) => {
            $i.writer.token({
                stringBefore: ``,
                token: `[`,
                stringAfter: ``,
            },
                $.token.annotation,
            )
        },
        element: ($) => {
            $i.writer.nonToken(
                {
                    string: `${$.isFirst ? "" : ","} `,
                },
            )
        },
        arrayEnd: ($) => {
            $i.writer.token(
                {
                    stringBefore: ` `,
                    token: `]`,
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },
        simpleStringValue: ($) => {
            $i.writer.token(
                {
                    stringBefore: ``,
                    token: ((): string => {

                        switch ($.token.token.wrapping[0]) {
                            case "none": {
                                // if ($.token.data.value === "true" || $.token.data.value === "false" || $.token.data.value === "null") {
                                //     return $.token.data.value
                                // }
                                // //eslint-disable-next-line
                                // const nr = new Number($.token.data.value).valueOf()
                                // if (isNaN(nr)) {
                                //     return createSerializedQuotedString($.token.data.value)
                                // }
                                return createSerializedNonWrappedString(
                                    $.token.token.value,
                                    {
                                        escapeString: $d.escapeString
                                    }

                                )
                            }
                            case "quote": {
                                return createSerializedQuotedString(
                                    $.token.token.value,
                                    {
                                        escapeString: $d.escapeString
                                    }
                                )
                            }
                            case "apostrophe": {
                                //IS THIS CORRECT?
                                return createSerializedQuotedString(
                                    $.token.token.value,
                                    {
                                        escapeString: $d.escapeString
                                    }
                                )
                            }
                            default:
                                return pl.au($.token.token.wrapping[0])
                        }
                    })(),
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },
        multilineStringValue: ($) => {
            $i.writer.token(
                {
                    stringBefore: ``,
                    token: createSerializedQuotedString(
                        $d.join($.token.token.lines, config.newline),
                        {
                            escapeString: $d.escapeString
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
                    token: `[`,
                    stringAfter: ``,
                },
                $.token.annotation,
            )
        },
        option: ($) => {
            $i.writer.token(
                {
                    stringBefore: ` `,
                    token: createSerializedQuotedString(
                        $.token.token.value,
                        {
                            escapeString: $d.escapeString
                        }
                    ),
                    stringAfter: `, `,
                },
                $.token.annotation,
            )
        },
        taggedUnionEnd: ($) => {
            $i.writer.nonToken(
                {
                    string: ` ]`,
                },
            )
        },
        end: () => {
            $i.writer.nonToken(
                {
                    string: config.newline,
                },
            )
            $i.onEnd()
        },
    }
}

