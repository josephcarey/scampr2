// import { getStudentListItem } from '../../blocks/student-list-item/student-list-item.js'
import { getHomeButtonBlock } from '../../blocks/home-button-block/home-button-block.js'
import { BoltResponse, CamperRoom } from '../../types/index.js'
import { getRoomListItem } from '../../blocks/room-list-item/room-list-item.js'

export const getRoomSearchResultsMessage: (
    inputString: string,
    rooms: CamperRoom[]
) => Promise<BoltResponse> = async (inputString, rooms) => ({
    text: 'Room search results...',
    blocks: [
        {
            type: 'header',
            text: {
                type: 'plain_text',
                text: ':squirrel: Room Search Results :squirrel:',
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
                text: `Here's what I found (searching \"${inputString}\"):`,
            },
        },
        // ...campers.map((camper) => getStudentListItem(camper)),
        ...rooms.flatMap((room) => getRoomListItem(room)),
    ],
})
