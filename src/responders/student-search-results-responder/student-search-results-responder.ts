import { getAllCampers } from '../../data/fetch-all/fetch-all.js'
import { fuzzyNameFilter } from '../../data/fuzzy-name-filter/fuzzy-name-filter.js'
import { getStudentSearchResultsMessage } from '../../messages/student-search-results-message/student-search-results-message.js'

import { ScamprResponder } from '../../types/index.js'

export const studentSearchResultsResponder: ScamprResponder = async (
    inputString
) => {
    console.log(
        `studentSearchResultsResponder called with input ${inputString}`
    )

    const students = await getAllCampers()
    console.log('students length:', students.length)
    const filteredStudents = fuzzyNameFilter(students, inputString ?? '')
    console.log('filtered length:', filteredStudents.length)
    return getStudentSearchResultsMessage(inputString ?? '', filteredStudents)
}
