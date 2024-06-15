import { roomResponder } from '../../../responders/room-responder/room-responder'
import { BoltCommand, BoltCommandRegistration } from '../../../types'

const ROOM_PATH = '/room'

const roomCommand: BoltCommand = async ({ ack, say, command }) => {
    try {
        await ack()

        console.log(`Processing roomHandler request for text: ${command.text}`)
        const response = await roomResponder(command.text)

        await say(response)
    } catch (error) {
        console.log('error:')
        console.error(error)
    }
}

export const roomCommandRegistration: BoltCommandRegistration = {
    path: ROOM_PATH,
    toRegister: roomCommand,
}
