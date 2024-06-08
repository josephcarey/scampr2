import { ScamprRegisterFunction } from '../types/'
import { routerCommandRegistrations } from './commands/'
import { routerActionRegistrations } from './actions'

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
}
