import { studentSearchResultsResponder } from '../../../responders/student-search-results-responder/student-search-results-responder'
import { BoltCommand, BoltCommandRegistration } from '../../../types'

const STUDENT_PATH = '/student'

const studentCommand: BoltCommand = async ({ ack, say, command }) => {
    try {
        await ack()

        const commandText = command.text.trim()

        console.log(
            `Processing studentCommand request for text: ${commandText}`
        )

        const searchResponse = await studentSearchResultsResponder(commandText)

        await say(searchResponse)
    } catch (error) {
        console.log('error:')
        console.error(error)
    }
}

export const studentCommandRegistration: BoltCommandRegistration = {
    path: STUDENT_PATH,
    toRegister: studentCommand,
}
