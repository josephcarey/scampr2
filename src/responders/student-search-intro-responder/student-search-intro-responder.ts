import { getStudentSearchIntroMessage } from '../../messages/student-search-intro-message/student-search-intro-message.js'

import { ScamprResponder } from '../../types/index.js'

export const studentSearchIntroResponder: ScamprResponder = async (
    inputString
) => {
    console.log(`studentSearchIntroResponder called with input ${inputString}`)
    return getStudentSearchIntroMessage()
}
