import { STUDENT_SEARCH_BUTTON_STRING } from '../../routers/actions/student-search-intro-button-action/student-search-intro-button-action.js'
import { BoltResponse } from '../../types/index.js'

export const getWelcomeMessage: () => BoltResponse = () => ({
    text: 'Scampr welcome message.',
    blocks: [
        {
            type: 'header',
            text: {
                type: 'plain_text',
                text: ':squirrel: Welcome :squirrel:',
                emoji: true,
            },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: "Hi! I'm Scampr, a cyborg squirrel tasked with helping you get data from CampSite for Dorian 2024. How can I help you today?",
            },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: "I'd like to find a student!",
            },
            accessory: {
                type: 'button',
                text: {
                    type: 'plain_text',
                    text: 'Student Search',
                    emoji: true,
                },
                value: 'none',
                action_id: STUDENT_SEARCH_BUTTON_STRING,
            },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: "I'd like info about a dorm/floor!",
            },
            accessory: {
                type: 'button',
                text: {
                    type: 'plain_text',
                    text: 'Dorm List',
                    emoji: true,
                },
                value: 'none',
                action_id: 'dorm-list-button-action',
            },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: "I'd like info about a period/class!",
            },
            accessory: {
                type: 'button',
                text: {
                    type: 'plain_text',
                    text: 'Period List',
                    emoji: true,
                },
                value: 'none',
                action_id: 'period-list-button-action',
            },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: "I'd like info about a large ensemble!",
            },
            accessory: {
                type: 'button',
                text: {
                    type: 'plain_text',
                    text: 'Ensemble List',
                    emoji: true,
                },
                value: 'none',
                action_id: 'ensemble-list-button-action',
            },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: "I'd like info about a counselor!",
            },
            accessory: {
                type: 'button',
                text: {
                    type: 'plain_text',
                    text: 'Counselor List',
                    emoji: true,
                },
                value: 'none',
                action_id: 'counselor-list-button-action',
            },
        },
    ],
})
