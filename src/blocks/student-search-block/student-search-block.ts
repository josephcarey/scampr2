import { STUDENT_SEARCH_RESULTS_INPUT_STRING } from '../../routers/actions/student-search-results-input-action/student-search-results-input-action.js'
import { BoltResponseBlockInput } from '../../types/index.js'

export const getStudentSearchBlock: () => BoltResponseBlockInput = () => ({
    type: 'input',
    dispatch_action: true,
    element: {
        type: 'plain_text_input',
        action_id: STUDENT_SEARCH_RESULTS_INPUT_STRING,
    },
    label: {
        type: 'plain_text',
        text: 'Student Search Input',
        emoji: true,
    },
})
