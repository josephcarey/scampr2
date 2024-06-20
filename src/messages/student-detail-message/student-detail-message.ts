import { getButtonBlock } from '../../blocks/button-block/button-block'
import { getCloseDetailButtonBlock } from '../../blocks/close-detail-button-block/close-detali-button-block'
import { getHomeButtonBlock } from '../../blocks/home-button-block/home-button-block'
import { URL_BUTTON_ACTION_STRING } from '../../routers/actions/url-button-action/url-button-action'
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
            type: 'actions',
            elements: [
                getHomeButtonBlock(),
                getCloseDetailButtonBlock(camper.preferredName, camper.id),
                // getButtonBlock(
                //     'Med Form',
                //     URL_BUTTON_ACTION_STRING,
                //     'med-form',
                //     camper.formUrls.medForm
                // ),
                getButtonBlock(
                    'Behavior Form',
                    URL_BUTTON_ACTION_STRING,
                    'behavior-form',
                    camper.formUrls.behaviorForm
                ),
            ],
        },
        camper.imageUrl
            ? {
                  type: 'image',
                  alt_text: `A picture of ${camper.preferredName}`,
                  image_url: camper.imageUrl,
              }
            : {
                  type: 'section',
                  text: {
                      type: 'mrkdwn',
                      text: 'No photo for student',
                  },
              },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Quick notes: ${camper.quickNotes}`,
            },
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
