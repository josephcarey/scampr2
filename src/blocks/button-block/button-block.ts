import { BoltResponseBlockElementButton } from '../../types'

export const getButtonBlock: (
    text: string,
    actionId: string,
    value: string,
    url?: string
) => BoltResponseBlockElementButton = (text, action_id, value, url) => ({
    type: 'button',
    text: {
        type: 'plain_text',
        text,
        emoji: true,
    },
    value,
    action_id,
    url,
})
