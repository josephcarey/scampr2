import { getHomeButtonBlock } from '../../blocks/home-button-block/home-button-block.js'
// import { getStudentSearchBlock } from '../../blocks/student-search-block/student-search-block.js'
import { BoltResponse } from '../../types/index.js'

export const getStudentSearchIntroMessage: () => Promise<BoltResponse> =
    async () => ({
        text: 'Search for a student by name...',
        blocks: [
            {
                type: 'header',
                text: {
                    type: 'plain_text',
                    text: ':squirrel: Student Search :squirrel:',
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
                    text: "I can help you find details about a student, I just need some information. Send any part of their name and I'll search the records.",
                },
            },
            // getStudentSearchBlock(),
        ],
    })
