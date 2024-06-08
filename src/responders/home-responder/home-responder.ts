import { getWelcomeMessage } from '../../messages/welcome-message/welcome-message.js'
import { ScamprResponder } from '../../types/index.js'

export const homeResponder: ScamprResponder = async () => getWelcomeMessage()
