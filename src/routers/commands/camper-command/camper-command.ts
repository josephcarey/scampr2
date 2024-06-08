import { studentSearchResultsResponder } from '../../../responders/student-search-results-responder/student-search-results-responder'
import { BoltCommand, BoltCommandRegistration } from '../../../types'

const CAMPER_PATH = '/camper'

const camperCommand: BoltCommand = async ({ ack, say, command }) => {
    try {
        await ack()

        const commandText = command.text.trim()

        console.log(`Processing camperHandler request for text: ${commandText}`)

        const searchResponse = await studentSearchResultsResponder(commandText)

        await say(searchResponse)
    } catch (error) {
        console.log('error:')
        console.error(error)
    }
}

export const camperCommandRegistration: BoltCommandRegistration = {
    path: CAMPER_PATH,
    toRegister: camperCommand,
}
