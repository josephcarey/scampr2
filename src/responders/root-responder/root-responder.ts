import { ScamprResponder } from '../../types/index.js'
import { homeResponder } from '../home-responder/home-responder.js'
import { roomResponder } from '../room-responder/room-responder.js'
import { studentSearchResultsResponder } from '../student-search-results-responder/student-search-results-responder.js'

const hasNumber: (testString: string) => boolean = (testString) =>
    /\d/.test(testString)

const shouldRespondWithRoomSearch: (testString: string) => boolean = (
    testString
) =>
    (testString.substring(0, 1).toLocaleLowerCase() === 'm' ||
        testString.substring(0, 1).toLocaleLowerCase() === 'd') &&
    hasNumber(testString)

export const rootResponder: ScamprResponder = async (inputText) => {
    console.log(`in rootResponder with text ${inputText}`)
    if (!inputText) return await homeResponder()

    const commandTexts = inputText?.trim().split(' ')
    console.log('commandTexts', commandTexts)

    const [firstCommandText, ...remainingCommandTexts] = commandTexts

    // look for 'room' or 'rooms' and map to room search
    if (
        firstCommandText.toLowerCase() == 'room' ||
        firstCommandText.toLowerCase() == 'rooms'
    ) {
        return await roomResponder(remainingCommandTexts.join(' '))
    }

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

    if (shouldRespondWithRoomSearch(firstCommandText)) {
        return await roomResponder(firstCommandText)
    }

    return await studentSearchResultsResponder(commandTexts.join(' '))

    // show the main menu
    // return await homeResponder()
}
