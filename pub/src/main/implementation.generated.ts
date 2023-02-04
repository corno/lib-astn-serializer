import { API } from "./api"
import { $$ as icreateAnnotater } from "./implementations/createAnnotater.p"
import { $$ as icreateApostrophedStringSerializer } from "./implementations/createApostrophedStringSerializer.p"
import { $$ as icreateASTNNormalizer } from "./implementations/createASTNNormalizer.p"
import { $$ as icreateJSONFormatter } from "./implementations/createJSONFormatter.p"
import { $$ as icreateMultilineStringSerializer } from "./implementations/createMultilineStringSerializer.p"
import { $$ as icreateNonWrappedStringSerializer } from "./implementations/createNonWrappedStringSerializer.p"
import { $$ as icreateQuotedStringSerializer } from "./implementations/createQuotedStringSerializer.p"

export const $a: API = {
    'createAnnotater': icreateAnnotater,
    'createApostrophedStringSerializer': icreateApostrophedStringSerializer,
    'createASTNNormalizer': icreateASTNNormalizer,
    'createJSONFormatter': icreateJSONFormatter,
    'createMultilineStringSerializer': icreateMultilineStringSerializer,
    'createNonWrappedStringSerializer': icreateNonWrappedStringSerializer,
    'createQuotedStringSerializer': icreateQuotedStringSerializer,
}