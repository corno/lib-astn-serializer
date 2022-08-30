import * as th from "astn-handlers-api"
import { EscapeMultilineString, EscapeString } from "astn-serialize-string-api"
import { IAnnotatedHandler } from "./interfaces/IAnnotatedHandler"
import { IFormatInstructionWriter } from "./interfaces/IFormatInstructionWriter"

export type CreateAnnotater = <InTokenAnnotation> (
    handler: IAnnotatedHandler<InTokenAnnotation>,
) => th.ITreeHandler<InTokenAnnotation>

export type CreateASTNNormalizer = <Annotation>(
    $: {
        indentationString: string
        newline: string
    },
    $p: {
        writer: IFormatInstructionWriter<Annotation>
        onEnd: () => void
    },
    $d: {
        escapeString: EscapeString
        escapeMultilineString: EscapeMultilineString
    }
) => IAnnotatedHandler<Annotation>

export type SerializeString = (
    str: string,
    $d: {
        escapeString: EscapeString
    }
) => string

export type SerializeMultilineString = (
    $: {
        lines: string[],
        indentation: string
    },
    $d: {
        escapeMultilineString: EscapeMultilineString
    }

) => string

export type CreateJSONFormatter = <Annotation>(
    $: {
        indentationString: string,
        newline: string,
    },
    $i: {
        writer: IFormatInstructionWriter<Annotation>,
        onEnd: () => void,
    },
    $d: {
        join: (array: string[], spacer: string) => string
        escapeString: EscapeString
    }
) => IAnnotatedHandler<Annotation>
