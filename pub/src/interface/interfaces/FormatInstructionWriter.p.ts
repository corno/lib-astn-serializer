import { TNonTokenFormatInstruction, TTokenFormatInstruction } from "../types/FormatInstruction.p"

export type IFormatInstructionWriter<PAnnotation> = {
    readonly "token": ($: {
        readonly "instruction": TTokenFormatInstruction,
        readonly "annotation": PAnnotation
    }) => void
    readonly "nonToken": ($: TNonTokenFormatInstruction) => void
}