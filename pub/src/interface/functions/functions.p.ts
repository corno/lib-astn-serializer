import * as pt from "pareto-core-types"

import * as escape from "api-astn-escape-string"
import * as th from "api-astn-handlers"

import { IAnnotatedHandler } from "../interfaces/AnnotatedHandler.p"
import { IFormatInstructionWriter } from "../interfaces/FormatInstructionWriter.p"

export type FCreateAnnotater = <PAnnotation> (
    $i: IAnnotatedHandler<PAnnotation>,
) => th.ITreeHandler<PAnnotation>

export type FCreateASTNNormalizer = <PAnnotation>(
    $: {
        readonly "indentationString": string
        readonly "newline": string
    },
    $i: {
        readonly "writer": IFormatInstructionWriter<PAnnotation>
        readonly "onEnd": () => void
    },
    $d: {
        readonly "escapeString": escape.FEscapeString
        readonly "escapeMultilineString": escape.FEscapeMultilineString
    }
) => IAnnotatedHandler<PAnnotation>


export type FCreateJSONFormatter = <PAnnotation>(
    $: {
        readonly "indentationString": string,
        readonly "newline": string,
    },
    $i: {
        readonly "writer": IFormatInstructionWriter<PAnnotation>,
        readonly "onEnd": () => void,
    },
    $d: {
        //readonly "join": (array: pt.Array<string>, spacer: string) => string
        readonly "escapeString": escape.FEscapeString
    }
) => IAnnotatedHandler<PAnnotation>
