import * as pt from "pareto-core-types"

import * as api from "../api"

export const $$: api.CcreateMultilineStringSerializer = (
    $d,
) => {
    return ($) => {
        //don't escape tabs, newlines!
        return `\`${$d.escapeMultilineString($)}\``
    }
}