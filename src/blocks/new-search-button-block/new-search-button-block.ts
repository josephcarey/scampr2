import { STUDENT_SEARCH_BUTTON_STRING } from '../../routers/actions/student-search-intro-button-action/student-search-intro-button-action.js'
import { type BoltResponseBlockElementButton } from '../../types/index.js'

export const getNewSearchButtonBlock: () => BoltResponseBlockElementButton =
    () => ({
        type: 'button',
        text: {
            type: 'plain_text',
            text: 'New Search',
            emoji: true,
        },
        value: 'none',
        action_id: STUDENT_SEARCH_BUTTON_STRING,
    })
