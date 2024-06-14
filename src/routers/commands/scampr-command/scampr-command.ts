import { rootResponder } from '../../../responders/root-responder/root-responder'
import { BoltCommand, BoltCommandRegistration } from '../../../types'

const SCAMPR_PATH = '/scampr'

const scamprCommand: BoltCommand = async ({ ack, say, command }) => {
    try {
        await ack()

        console.log(
            `Processing camperHandler request for text: ${command.text}`
        )
        const response = await rootResponder(command.text)

        await say(response)
    } catch (error) {
        console.log('error:')
        console.error(error)
    }
}

export const scamprCommandRegistration: BoltCommandRegistration = {
    path: SCAMPR_PATH,
    toRegister: scamprCommand,
}
