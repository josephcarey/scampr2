import { getStudentSearchResultsMessage } from '../../../messages/student-search-results-message/student-search-results-message.js'
import { BoltAction, BoltActionRegistration } from '../../../types/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const STUDENT_SEARCH_RESULTS_INPUT_STRING =
    'student-search-button-action'

const studentSearchResultsButtonAction: BoltAction = async ({
    ack,
    action,
    respond,
}) => {
    await ack()
    console.log(
        `studentSearchResultsButtonAction call with action: ${JSON.stringify(action)}`
    )

    const message = await getStudentSearchResultsMessage()

    await respond(message)
}

export const studentSearchResultsButtonActionRegistration: BoltActionRegistration =
    {
        actionString: STUDENT_SEARCH_RESULTS_INPUT_STRING,
        toRegister: studentSearchResultsButtonAction,
    }
