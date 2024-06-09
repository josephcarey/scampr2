import { homeResponder } from '../../../responders/home-responder/home-responder'
import { studentSearchResultsResponder } from '../../../responders/student-search-results-responder/student-search-results-responder'
import { BoltCommand, BoltCommandRegistration } from '../../../types'

const SCAMPR_PATH = '/scampr'

const scamprCommand: BoltCommand = async ({ ack, say, command }) => {
    try {
        await ack()

        const commandTexts = command.text.trim().split(' ')

        console.log(
            `Processing camperHandler request for text: ${commandTexts}`
        )

        const [firstCommandText, ...remainingCommandTexts] = commandTexts

        // look for 'student' or 'camper' paths
        if (
            firstCommandText.toLowerCase() == 'student' ||
            firstCommandText.toLowerCase() == 'students' ||
            firstCommandText.toLowerCase() == 'camper' ||
            firstCommandText.toLowerCase() == 'campers'
        ) {
            const searchResponse = await studentSearchResultsResponder(
                remainingCommandTexts.join(' ')
            )
            await say(searchResponse)
            return
        }

        // show the main menu
        const response = await homeResponder()

        await say(response)

        // if (command.text && command.text.length === 0) {
        // say(
        // 'Oops! Received /camper command, but no name was included. Please include a name to search for a camper, e.g.: `/camper Jo`',
        // );
        // }

        // say('something went wrong with /scampr...');
    } catch (error) {
        console.log('error:')
        console.error(error)
    }
}

export const scamprCommandRegistration: BoltCommandRegistration = {
    path: SCAMPR_PATH,
    toRegister: scamprCommand,
}
