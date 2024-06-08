import { studentDetailResponder } from '../../../responders/student-detail-responder/student-detail-responder.js'
import { BoltAction, BoltActionRegistration } from '../../../types/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const STUDENT_DETAIL_BUTTON_STRING = 'student-detail-button-action'

const studentDetailButtonAction: BoltAction = async ({
    ack,
    action,
    respond,
}) => {
    await ack()
    console.log(`studentDetailButtonAction call with action: ${action.value}`)

    const message = await studentDetailResponder(action.value)

    await respond(message)
}

export const studentDetailButtonActionRegistration: BoltActionRegistration = {
    actionString: STUDENT_DETAIL_BUTTON_STRING,
    toRegister: studentDetailButtonAction,
}
