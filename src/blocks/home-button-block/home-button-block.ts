import { HOME_BUTTON_STRING } from '../../routers/actions/home-button-action/home-button-action.js'
import { type BoltResponseBlockElementButton } from '../../types/index.js'

export const getHomeButtonBlock: () => BoltResponseBlockElementButton = () => ({
    type: 'button',
    text: {
        type: 'plain_text',
        text: 'Home',
        emoji: true,
    },
    value: 'none',
    action_id: HOME_BUTTON_STRING,
})
