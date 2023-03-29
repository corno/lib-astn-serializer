import { API } from "./api.generated"
import { $$ as icreateAnnotater } from "./implementations/createAnnotater.a.c"
import { $$ as icreateApostrophedStringSerializer } from "./implementations/createApostrophedStringSerializer.s.f"
import { $$ as icreateASTNNormalizer } from "./implementations/createASTNNormalizer.s.f"
import { $$ as icreateJSONFormatter } from "./implementations/createJSONFormatter.s.f"
import { $$ as icreateMultilineStringSerializer } from "./implementations/createMultilineStringSerializer.s.f"
import { $$ as icreateNonWrappedStringSerializer } from "./implementations/createNonWrappedStringSerializer.s.f"
import { $$ as icreateQuotedStringSerializer } from "./implementations/createQuotedStringSerializer.s.f"

export const $api: API = {
    'createAnnotater': icreateAnnotater,
    'createApostrophedStringSerializer': icreateApostrophedStringSerializer,
    'createASTNNormalizer': icreateASTNNormalizer,
    'createJSONFormatter': icreateJSONFormatter,
    'createMultilineStringSerializer': icreateMultilineStringSerializer,
    'createNonWrappedStringSerializer': icreateNonWrappedStringSerializer,
    'createQuotedStringSerializer': icreateQuotedStringSerializer,
}