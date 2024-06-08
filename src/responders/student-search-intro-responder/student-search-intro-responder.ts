import { getStudentSearchIntroMessage } from '../../messages/student-search-intro-message/student-search-intro-message.js'

import { type BoltResponse } from '../../types/index.js'

export const studentSearchIntroResponder: () => Promise<BoltResponse> =
    async () => getStudentSearchIntroMessage()
