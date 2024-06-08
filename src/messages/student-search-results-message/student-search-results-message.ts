import { getHomeButtonBlock } from '../../blocks/home-button-block/home-button-block.js'
// import { getStudentSearchBlock } from '../../blocks/student-search-block/student-search-block.js'
import { BoltResponse } from '../../types/index.js'

export const getStudentSearchResultsMessage: () => Promise<BoltResponse> =
    async () => ({
        text: 'Student search results...',
        blocks: [
            {
                type: 'header',
                text: {
                    type: 'plain_text',
                    text: ':squirrel: Student Search Results :squirrel:',
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
                    text: "Here's what I found:",
                },
            },
            // getStudentSearchBlock(),
        ],
    })
