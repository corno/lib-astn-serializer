import * as pl from "pareto-core-lib"

import * as api from "../../interface"

import * as escape from "api-astn-escape-string"

import { createSerializedNonWrappedString, createSerializedQuotedString } from "./createNonWrappedStringSerializer.p"

export function createJSONFormatter<PAnnotation>(
    $: {
        indentationString: string,
        newline: string,
    },
    $i: {
        writer: api.IFormatInstructionWriter<PAnnotation>,
        onEnd: () => void,
    },
    $d: {
        join: (array: string[], spacer: string) => string
        escapeString: escape.FEscapeString
    }
): api.IAnnotatedHandler<PAnnotation> {
    const config = $
    function createIndentation(context: api.TStackContext) {
        let indentation = ``
        for (let x = 0; x !== context.dictionaryDepth + context.verboseGroupDepth; x += 1) {
            indentation += $.indentationString
        }
        return indentation
    }
    return {
        objectBegin: ($) => {
            $i.writer.token({
                instruction: {
                    stringBefore: ``,
                    token: `{`,
                    stringAfter: ``,
                },
                annotation: $.token.annotation,
            })
        },
        property: ($) => {
            $i.writer.token({
                instruction: {
                    stringBefore: `${$.isFirst ? "" : ","}${config.newline}${createIndentation($.stackContext)}`,
                    token: createSerializedQuotedString(
                        $.propertyToken.token.value,
                        {
                            escapeString: $d.escapeString
                        }
                    ),
                    stringAfter: `: `,
                },
                annotation: $.propertyToken.annotation
            })
        },
        objectEnd: ($) => {
            $i.writer.token({
                instruction: {
                    stringBefore: $.isEmpty ? ` ` : `${config.newline}${createIndentation($.stackContext)}`,
                    token: `}`,
                    stringAfter: ``,
                },
                annotation: $.token.annotation,
            })
        },

        arrayBegin: ($) => {
            $i.writer.token({
                instruction: {
                    stringBefore: ``,
                    token: `[`,
                    stringAfter: ``,
                },
                annotation: $.token.annotation,
            })
        },
        element: ($) => {
            $i.writer.nonToken(
                {
                    string: `${$.isFirst ? "" : ","} `,
                },
            )
        },
        arrayEnd: ($) => {
            $i.writer.token({
                instruction: {
                    stringBefore: ` `,
                    token: `]`,
                    stringAfter: ``,
                },
                annotation: $.token.annotation,
            })
        },
        simpleStringValue: ($) => {
            $i.writer.token({
                instruction: {
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
                annotation: $.token.annotation,
            })
        },
        multilineStringValue: ($) => {
            $i.writer.token({
                instruction: {
                    stringBefore: ``,
                    token: createSerializedQuotedString(
                        $d.join($.token.token.lines, config.newline),
                        {
                            escapeString: $d.escapeString
                        }
                    ),
                    stringAfter: ``,
                },
                annotation: $.token.annotation,
            })
        },
        taggedUnionBegin: ($) => {
            $i.writer.token({
                instruction: {
                    stringBefore: ``,
                    token: `[`,
                    stringAfter: ``,
                },
                annotation: $.token.annotation,
            })
        },
        option: ($) => {
            $i.writer.token({
                instruction: {
                    stringBefore: ` `,
                    token: createSerializedQuotedString(
                        $.token.token.value,
                        {
                            escapeString: $d.escapeString
                        }
                    ),
                    stringAfter: `, `,
                },
                annotation: $.token.annotation,
            })
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

