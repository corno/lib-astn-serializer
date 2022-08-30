import { NonTokenFormatInstruction, TokenFormatInstruction } from "../types/FormatInstruction"

export type IFormatInstructionWriter<Annotation> = {
    token: (instruction: TokenFormatInstruction, annotation: Annotation) => void
    nonToken: (instruction: NonTokenFormatInstruction) => void
}