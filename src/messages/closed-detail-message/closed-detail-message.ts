import { STUDENT_DETAIL_BUTTON_STRING } from '../../routers/actions/student-detail-button-action/student-detail-button-action'
import { BoltResponse } from '../../types'

export const getClosedDetailMessage: (
    camperName: string,
    camperId: string
) => BoltResponse = (camperName, camperId) => ({
    text: `Closed camper detail for ${camperName}...`,
    blocks: [
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Closed detail for ${camperName}`,
            },
            accessory: {
                type: 'button',
                text: {
                    type: 'plain_text',
                    text: 'Reopen',
                    emoji: true,
                },
                value: camperId,
                action_id: STUDENT_DETAIL_BUTTON_STRING,
            },
        },
    ],
})
