import { BoltResponseBlockInput } from '../../types/index.js'

export const getStudentSearchBlock: () => BoltResponseBlockInput = () => ({
    type: 'input',
    dispatch_action: true,
    element: {
        type: 'plain_text_input',
        action_id: 'student-search-button-action',
    },
    label: {
        type: 'plain_text',
        text: 'Student Search Input',
        emoji: true,
    },
})
