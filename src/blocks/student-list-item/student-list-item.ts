import { STUDENT_DETAIL_BUTTON_STRING } from '../../routers/actions/student-detail-button-action/student-detail-button-action'
import { BoltResponseBlockSection, Camper } from '../../types'

export const getStudentListItem: (
    camper: Camper
) => BoltResponseBlockSection = (camper) => ({
    type: 'section',
    text: {
        type: 'mrkdwn',
        text: `${camper.preferredName} (${camper.roomNumber})`,
    },
    accessory: {
        type: 'button',
        text: {
            type: 'plain_text',
            text: 'Select',
            emoji: true,
        },
        value: camper.id,
        action_id: STUDENT_DETAIL_BUTTON_STRING,
    },
})
