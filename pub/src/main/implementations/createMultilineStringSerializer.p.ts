import * as pt from "pareto-core-types"

import * as api from "../api"

export const $$: api.CcreateSerializedMultilineString = (
    $d,
) => {
    return ($) => {
        //don't escape tabs, newlines!
        return `\`${$d.escapeMultilineString($)}\``
    }
}