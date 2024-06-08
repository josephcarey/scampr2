import { studentSearchResultsResponder } from '../../../responders/student-search-results-responder/student-search-results-responder.js'
import { BoltAction, BoltActionRegistration } from '../../../types/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const STUDENT_SEARCH_RESULTS_INPUT_STRING =
    'student-search-results-button-action'

const studentSearchResultsButtonAction: BoltAction = async ({
    ack,
    action,
    respond,
}) => {
    await ack()
    console.log(
        `studentSearchResultsButtonAction call with action: ${action.value}`
    )

    const message = await studentSearchResultsResponder()

    await respond(message)
}

export const studentSearchResultsButtonActionRegistration: BoltActionRegistration =
    {
        actionString: STUDENT_SEARCH_RESULTS_INPUT_STRING,
        toRegister: studentSearchResultsButtonAction,
    }
