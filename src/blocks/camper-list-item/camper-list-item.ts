import { BoltResponseBlockSection, Camper } from '../../types'

export const getCamperListItem: (camper: Camper) => BoltResponseBlockSection = (
    camper
) => ({
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
        action_id: 'camper-button',
    },
})
