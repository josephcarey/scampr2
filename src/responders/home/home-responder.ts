import { getWelcomeBlock } from '../../messages/welcome-message/welcome-message.js'
import { type BoltResponse } from '../../types/index.js'

export const homeResponder: () => Promise<BoltResponse> = async () => {
    const message = getWelcomeBlock()
    return message
}
