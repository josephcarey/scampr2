import { STUDENT_DETAIL_BUTTON_STRING } from '../../routers/actions/student-detail-button-action/student-detail-button-action'
import { BoltResponseBlockSection, Camper, CamperRoom } from '../../types'

export const getRoomListItem: (
    room: CamperRoom
) => BoltResponseBlockSection[] = (room) => [
    {
        type: 'section',
        text: {
            type: 'mrkdwn',
            text: `*Room ${room.roomNumber}*`,
        },
    },
    ...room.campers.map((camper) => getCamperInRoom(camper)),
]

const getCamperInRoom: (camper: Camper) => BoltResponseBlockSection = (
    camper
) => ({
    type: 'section',
    text: {
        type: 'mrkdwn',
        text: `${camper.preferredName} (${camper.primaryFamily.address.city}, ${camper.primaryFamily.address.state})`,
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
