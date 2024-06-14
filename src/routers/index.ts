import { ScamprRegisterFunction } from '../types/'
import { routerCommandRegistrations } from './commands/'
import { routerActionRegistrations } from './actions'
import { rootResponder } from '../responders/root-responder/root-responder'

const routers = {
    commands: routerCommandRegistrations,
    actions: routerActionRegistrations,
}

export const registerRouters: ScamprRegisterFunction = (app) => {
    for (const command of routers.commands) {
        app.command(command.path, command.toRegister)
    }

    for (const action of routers.actions) {
        app.action(action.actionString, action.toRegister)
    }

    app.message(
        '',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async ({ body, say }: any) => {
            console.log(body.event.text)
            const response = await rootResponder(body.event.text)
            await say(response)
        }
    )
}
