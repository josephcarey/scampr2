import { getClosedDetailMessage } from '../../messages/closed-detail-message/closed-detail-message.js'
import { getErrorMessage } from '../../messages/error-message/error-message.js'

import { ScamprResponder } from '../../types/index.js'

const CLOSE_DETAIL_DELIMITER = ';'

export const getCloseDetailDataString: (
    camperName: string,
    camperId: string
) => string = (camperName, camperId) =>
    `${camperName}${CLOSE_DETAIL_DELIMITER}${camperId}`

export const closeDetailResponder: ScamprResponder = async (inputString) => {
    console.log(`closeDetailResponder called with input ${inputString}`)

    if (!inputString) {
        return getErrorMessage(
            `closeDetailResponder called with empty camperName`
        )
    }

    const [camperName, camperId] = inputString.split(CLOSE_DETAIL_DELIMITER)

    return getClosedDetailMessage(camperName, camperId)
}
