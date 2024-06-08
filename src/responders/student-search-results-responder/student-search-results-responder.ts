import { getAllCampers } from '../../data/fetch-all/fetch-all.js'
import { fuzzyNameFilter } from '../../data/fuzzy-name-filter/fuzzy-name-filter.js'
import { getErrorMessage } from '../../messages/error-message/error-message.js'
import { getStudentSearchResultsMessage } from '../../messages/student-search-results-message/student-search-results-message.js'

import { ScamprResponder } from '../../types/index.js'

const MAX_RECORDS = 49

export const studentSearchResultsResponder: ScamprResponder = async (
    inputString
) => {
    console.log(
        `studentSearchResultsResponder called with input ${inputString}`
    )

    const students = await getAllCampers()
    const filteredStudents = fuzzyNameFilter(students, inputString ?? '')

    if (filteredStudents.length > MAX_RECORDS) {
        return getErrorMessage(
            `Student search turned up too many results: ${filteredStudents.length} results returned for search input ${inputString}. Try a more specific search input.`
        )
    } else if (filteredStudents.length == 1)
        return getStudentSearchResultsMessage(
            inputString ?? '',
            filteredStudents
        )

    return getErrorMessage(
        `Student search returned no results for ${inputString}. Make a different choice.`
    )
}
