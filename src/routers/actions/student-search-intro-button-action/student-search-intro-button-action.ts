import { studentSearchIntroResponder } from '../../../responders/student-search-intro-responder/student-search-intro-responder.js'
import { BoltAction, BoltActionRegistration } from '../../../types/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const STUDENT_SEARCH_BUTTON_STRING = 'student-search-intro-button-action'

const studentSearchIntroButtonAction: BoltAction = async ({
    ack,
    action,
    respond,
}) => {
    await ack()
    console.log(
        `studentSearchIntroButtonAction call with action: ${action.value}`
    )

    const message = await studentSearchIntroResponder()

    await respond(message)
}

export const studentSearchIntroButtonActionRegistration: BoltActionRegistration =
    {
        actionString: STUDENT_SEARCH_BUTTON_STRING,
        toRegister: studentSearchIntroButtonAction,
    }
