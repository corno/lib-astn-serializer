import * as api from "../interface"
import { createAnnotater } from "./createAnnotater"
import { createASTNNormalizer } from "./createASTNNormalizer"
import { createJSONFormatter } from "./createJSONFormatter"
import { createSerializedApostrophedString, createSerializedMultilineString, createSerializedNonWrappedString, createSerializedQuotedString } from "./stringSerialization"

// type API = {
//     createAnnotater: api.CreateAnnotater
//     createASTNNormalizer: api.CreateASTNNormalizer
//     createJSONFormatter: api.CreateJSONFormatter
//     createSerializedNonWrappedString: api.SerializeString
//     createSerializedApostrophedString: api.SerializeString
//     createSerializedQuotedString: api.SerializeString
//     createSerializedMultilineString: api.SerializeMultilineString
// }



export const $: API = {
    createAnnotater: createAnnotater,
    createASTNNormalizer: createASTNNormalizer,
    createJSONFormatter: createJSONFormatter,
    createSerializedNonWrappedString: createSerializedNonWrappedString,
    createSerializedApostrophedString: createSerializedApostrophedString,
    createSerializedMultilineString: createSerializedMultilineString,
    createSerializedQuotedString: createSerializedQuotedString,
}