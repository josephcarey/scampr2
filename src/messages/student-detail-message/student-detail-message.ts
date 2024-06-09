import { BoltResponse, Camper } from '../../types'
import { tabAndNewlineParse } from '../../utils/tab-and-newline-parse'

export const getStudentDetailMessage: (camper: Camper) => BoltResponse = (
    camper
) => ({
    text: `${camper.preferredName} (${camper.roomNumber}...)`,
    blocks: [
        {
            type: 'header',
            text: {
                type: 'plain_text',
                text: camper?.preferredName ?? 'Missing Name',
                emoji: true,
            },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Face:`,
            },
            accessory: {
                type: 'image',
                image_url: camper.imageUrl ?? '',
                alt_text: 'camper',
            },
            // accessory: {
            //   type: "button",
            //   text: {
            //     type: "plain_text",
            //     text: "Select",
            //     emoji: true,
            //   },
            //   value: camper.roomNumber,
            //   action_id: "room-button",
            // },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Room ${camper.roomNumber}`,
            },
            // accessory: {
            //     type: 'button',
            //     text: {
            //         type: 'plain_text',
            //         text: 'Select',
            //         emoji: true,
            //     },
            //     value: camper.roomNumber,
            //     action_id: 'room-button',
            // },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: tabAndNewlineParse([
                    ['Period 1:', camper.p1 ?? 'missing p1...'],
                    ['Period 2:', camper.p2 ?? 'missing p2...'],
                    ['Period 3:', camper.p3 ?? 'missing p3...'],
                    ['Period 4:', camper.p4 ?? 'missing p4...'],
                    ['Period 5:', camper.p5 ?? 'missing p5...'],
                    ['Period 6:', camper.p6 ?? 'missing p6...'],
                    ['Period 7:', camper.p7 ?? 'missing p7...'],
                ]),
            },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Lessons: ${camper.lessons}`,
            },
        },
    ],
})
