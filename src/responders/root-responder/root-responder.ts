import { ScamprResponder } from '../../types/index.js'
import { homeResponder } from '../home-responder/home-responder.js'
import { studentSearchResultsResponder } from '../student-search-results-responder/student-search-results-responder.js'

export const rootResponder: ScamprResponder = async (inputText) => {
    console.log(`in rootResponder with text ${inputText}`)
    if (!inputText) return await homeResponder()

    const commandTexts = inputText?.trim().split(' ')
    console.log('commandTexts', commandTexts)

    const [firstCommandText, ...remainingCommandTexts] = commandTexts

    // look for 'student' or 'camper' paths
    if (
        firstCommandText.toLowerCase() == 'student' ||
        firstCommandText.toLowerCase() == 'students' ||
        firstCommandText.toLowerCase() == 'camper' ||
        firstCommandText.toLowerCase() == 'campers'
    ) {
        return await studentSearchResultsResponder(
            remainingCommandTexts.join(' ')
        )
    }

    return await studentSearchResultsResponder(commandTexts.join(' '))

    // show the main menu
    // return await homeResponder()
}
