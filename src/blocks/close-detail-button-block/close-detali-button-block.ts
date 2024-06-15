import { getCloseDetailDataString } from '../../responders/close-detail-responder/close-detail-responder.js'
import { CLOSE_DETAIL_BUTTON_STRING } from '../../routers/actions/close-detail-button-action/close-detail-button-action.js'
import { type BoltResponseBlockElementButton } from '../../types/index.js'

export const getCloseDetailButtonBlock: (
    camperName: string,
    camperId: string
) => BoltResponseBlockElementButton = (camperName, camperId) => ({
    type: 'button',
    text: {
        type: 'plain_text',
        text: 'Close',
        emoji: true,
    },
    value: getCloseDetailDataString(camperName, camperId),
    action_id: CLOSE_DETAIL_BUTTON_STRING,
})
