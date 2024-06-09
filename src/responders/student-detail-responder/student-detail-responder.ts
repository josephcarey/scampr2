import { getAllCampers } from '../../data/fetch-all/fetch-all.js'

import { idFilter } from '../../data/id-filter/id-filter.js'
import { getStudentDetailMessage } from '../../messages/student-detail-message/student-detail-message.js'

import { ScamprResponder } from '../../types/index.js'

export const studentDetailResponder: ScamprResponder = async (id) => {
    console.log(`studentDetailResponder called with input ${id}`)

    const students = await getAllCampers()
    console.log('students length:', students.length)
    const filteredStudents = idFilter(students, id ?? '')
    console.log('filtered length:', filteredStudents.length)

    //TODO: better error handling, return a clean message if something goes wrong
    return getStudentDetailMessage(filteredStudents[0])
}
