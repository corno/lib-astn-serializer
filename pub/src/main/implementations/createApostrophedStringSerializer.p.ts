import * as pt from 'pareto-core-types'

import * as api from "../api"

export const $$: api.CcreateApostrophedStringSerializer = (
    $d,
) => {
    return ($) => {
        return `'${$d.escapeString({
            str: $,
            escapeTabsAndNewLines: true,
            wrapperToEscape: ['set', "'"],
        })}'`

    }
}
