import { getStudentSearchIntroMessage } from '../../../messages/student-search-intro-message/student-search-intro-message.js'
import { BoltAction, BoltActionRegistration } from '../../../types/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const STUDENT_SEARCH_BUTTON_STRING = 'student-search-button-action'

const studentSearchIntroButtonAction: BoltAction = async ({
    ack,
    action,
    respond,
}) => {
    await ack()
    console.log(`studentSearchButtonAction call with action: ${action.value}`)

    const message = await getStudentSearchIntroMessage()

    await respond(message)
}

export const studentSearchIntroButtonActionRegistration: BoltActionRegistration =
    {
        actionString: STUDENT_SEARCH_BUTTON_STRING,
        toRegister: studentSearchIntroButtonAction,
    }
