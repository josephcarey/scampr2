import { getStudentSearchResultsMessage } from '../../messages/student-search-results-message/student-search-results-message.js'

import { ScamprResponder } from '../../types/index.js'

export const studentSearchResultsResponder: ScamprResponder = async () =>
    getStudentSearchResultsMessage()
