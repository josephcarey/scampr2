import { closeDetailResponder } from '../../../responders/close-detail-responder/close-detail-responder.js'
import {
    BoltActionRegistration,
    type BoltAction,
} from '../../../types/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const CLOSE_DETAIL_BUTTON_STRING = 'close-detail-button-action'

const closeDetailButtonAction: BoltAction = async ({
    ack,
    action,
    respond,
}) => {
    await ack()
    console.log(`closeDetailButtonAction call with action: ${action.value}`)

    const response = await closeDetailResponder(action.value)

    await respond(response)
}

export const closeDetailButtonActionRegistration: BoltActionRegistration = {
    actionString: CLOSE_DETAIL_BUTTON_STRING,
    toRegister: closeDetailButtonAction,
}
