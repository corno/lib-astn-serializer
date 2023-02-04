import * as pt from "pareto-core-types"

import * as api from "../api"

export const $$: api.CcreateSerializedQuotedString = (
    $d,
) => {
    return ($) => {
        return $d.escapeString({
            str: $,
            escapeTabsAndNewLines: false,
            wrapperToEscape: ['not set', {}],
        })
    }
}
