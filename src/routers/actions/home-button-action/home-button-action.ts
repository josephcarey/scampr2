import { homeResponder } from '../../../responders/home-responder/home-responder.js'
import {
    BoltActionRegistration,
    type BoltAction,
} from '../../../types/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const HOME_BUTTON_STRING = 'home-button-action'

const homeButtonAction: BoltAction = async ({ ack, action, respond }) => {
    await ack()
    console.log(`homeButtonAction call with action: ${action.value}`)

    const response = await homeResponder()

    await respond(response)
}

export const homeButtonActionRegistration: BoltActionRegistration = {
    actionString: HOME_BUTTON_STRING,
    toRegister: homeButtonAction,
}
