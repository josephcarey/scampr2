import { homeResponder } from '../../../responders/home/home-responder'
import { BoltCommand, BoltCommandRegistration } from '../../../types'

const SCAMPR_PATH = '/scampr'

const scamprCommand: BoltCommand = async ({ ack, say }) => {
    try {
        await ack()
        // await say('hello world!')
        const response = await homeResponder()
        await say(response)

        // Console.log(`Processing camperHandler request for text: ${command.text}`);

        // if (command.text && command.text.length === 0) {
        // say(
        // 'Oops! Received /camper command, but no name was included. Please include a name to search for a camper, e.g.: `/camper Jo`',
        // );
        // }

        // say('something went wrong with /scampr...');
    } catch (error) {
        console.log('error:')
        console.error(error)
    }
}

export const scamprCommandRegistration: BoltCommandRegistration = {
    path: SCAMPR_PATH,
    toRegister: scamprCommand,
}
