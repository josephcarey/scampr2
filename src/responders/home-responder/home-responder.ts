import { getWelcomeMessage } from '../../messages/welcome-message/welcome-message.js'
import { type BoltResponse } from '../../types/index.js'

export const homeResponder: () => Promise<BoltResponse> = async () =>
    getWelcomeMessage()
