import {
    BoltActionRegistration,
    type BoltAction,
} from '../../../types/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const URL_BUTTON_ACTION_STRING = 'url-button-action'

const urlButtonAction: BoltAction = async ({ ack, action }) => {
    await ack()
    console.log(`ignoring urlButtonAction call with action: ${action.value}`)
}

export const urlButtonActionRegistration: BoltActionRegistration = {
    actionString: URL_BUTTON_ACTION_STRING,
    toRegister: urlButtonAction,
}
