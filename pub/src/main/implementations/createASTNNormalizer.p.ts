import * as pl from 'pareto-core-lib'



import * as api from "../api"

import * as stringSerialization from "./createNonWrappedStringSerializer.p"

export const $$: api.CcreateASTNNormalizer = ($c, $d) => {
    return <Annotation>($: null) => {
        const config = $c
        function createIndentation($: api.T.StackContext<Annotation>) {
            const depth = $.dictionaryDepth + $.verboseGroupDepth + $.listDepth
            let indentation = config.newline
            for (let x = 0; x !== depth; x += 1) {
                indentation += config.indentationString
            }
            return indentation
        }
        return {
            objectBegin: ($) => {
                $i.writer.token({
                    instruction: {
                        stringBefore: ``,
                        token: `${$.token.token.type[0] === "verbose group" ? "(" : "{"}`,
                        stringAfter: ``,
                    },
                    annotation: $.token.annotation,
                })
            },
            property: ($) => {
                $i.writer.token({
                    instruction: {
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
                    annotation: $.propertyToken.annotation,
                })
            },
            objectEnd: ($) => {
                $i.writer.token({
                    instruction: {
                        stringBefore: $.isEmpty ? ` ` : `${createIndentation($.stackContext)}`,
                        token: `${$.openToken.token.type[0] === "verbose group" ? ")" : "}"}`,
                        stringAfter: ``,
                    },
                    annotation: $.token.annotation,
                })
            },

            arrayBegin: ($) => {
                $i.writer.token({
                    instruction: {
                        stringBefore: ``,
                        token: `${$.token.token.type[0] === "shorthand group" ? "<" : "["}`,
                        stringAfter: ``,
                    },
                    annotation: $.token.annotation,
                })
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
                $i.writer.token({
                    instruction: {
                        stringBefore: $.openToken.token.type[0] === "shorthand group"
                            ? ` `
                            : $.isEmpty ? ` ` : `${createIndentation($.stackContext)}`,
                        token: $.openToken.token.type[0] === "shorthand group"
                            ? `>`
                            : `]`,
                        stringAfter: ``,
                    },
                    annotation: $.token.annotation,
                })
            },

            simpleStringValue: ($) => {
                function serializeSimpleString(
                    $: h.TSimpleString,
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
                $i.writer.token({
                    instruction: {
                        stringBefore: ``,
                        token: serializeSimpleString(
                            $.token.token,
                        ),
                        stringAfter: ``,
                    },
                    annotation: $.token.annotation,
                })
            },
            multilineStringValue: ($) => {
                $i.writer.token({
                    instruction: {
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
                    annotation: $.token.annotation,
                })
            },

            taggedUnionBegin: ($) => {
                $i.writer.token({
                    instruction: {
                        stringBefore: ``,
                        token: `|`,
                        stringAfter: ` `,
                    },
                    annotation: $.token.annotation,
                })
            },
            option: ($) => {
                $i.writer.token({
                    instruction: {
                        stringBefore: ``,
                        token: stringSerialization.createSerializedApostrophedString(
                            $.token.token.value,
                            {
                                escapeString: $d.escapeString,
                            }
                        ),
                        stringAfter: ` `,
                    },
                    annotation: $.token.annotation,
                })
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
}