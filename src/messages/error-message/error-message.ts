import { getHomeButtonBlock } from '../../blocks/home-button-block/home-button-block'
import { BoltResponse } from '../../types'

export const getErrorMessage: (error: string) => BoltResponse = (error) => ({
    text: 'Scampr welcome message.',
    blocks: [
        {
            type: 'header',
            text: {
                type: 'plain_text',
                text: ':squirrel: Error :squirrel:',
                emoji: true,
            },
        },
        {
            type: 'actions',
            elements: [getHomeButtonBlock()],
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: 'Something went wrong while attempting your request. Details below.',
            },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Error: ${error}`,
            },
        },
    ],
})
