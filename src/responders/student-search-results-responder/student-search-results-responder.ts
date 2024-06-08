import { getStudentSearchResultsMessage } from '../../messages/student-search-results-message/student-search-results-message.js'

import { type BoltResponse } from '../../types/index.js'

export const studentSearchResultsResponder: () => Promise<BoltResponse> =
    async () => getStudentSearchResultsMessage()
