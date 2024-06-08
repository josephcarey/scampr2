import { getStudentListItem } from '../../blocks/student-list-item/student-list-item.js'
import { getHomeButtonBlock } from '../../blocks/home-button-block/home-button-block.js'
import { getNewSearchButtonBlock } from '../../blocks/new-search-button-block/new-search-button-block.js'
import { BoltResponse, Camper } from '../../types/index.js'

export const getStudentSearchResultsMessage: (
    inputString: string,
    campers: Camper[]
) => Promise<BoltResponse> = async (inputString, campers) => ({
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
            elements: [getHomeButtonBlock(), getNewSearchButtonBlock()],
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Here's what I found (searching \"${inputString}\"):`,
            },
        },
        ...campers.map((camper) => getStudentListItem(camper)),
        // getStudentSearchBlock(),
    ],
})
