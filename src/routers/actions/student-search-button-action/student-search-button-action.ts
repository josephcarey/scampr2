import { getStudentSearchIntroMessage } from '../../../messages/student-search-intro-message/student-search-intro-message.js'
import { BoltAction, BoltActionRegistration } from '../../../types/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const STUDENT_SEARCH_BUTTON_STRING = 'student-search-button-action'

const studentSearchButtonAction: BoltAction = async ({
    ack,
    action,
    respond,
    plain_text_input,
}) => {
    await ack()
    console.log(`studentSearchButtonAction call with action: ${action.value}`)
    console.log(JSON.stringify(action))
    console.log(JSON.stringify(plain_text_input))

    const message = await getStudentSearchIntroMessage()

    await respond(message)
}

export const studentSearchButtonActionRegistration: BoltActionRegistration = {
    actionString: STUDENT_SEARCH_BUTTON_STRING,
    toRegister: studentSearchButtonAction,
}
