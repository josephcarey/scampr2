import { ScamprRegisterFunction } from '../types/'
import { routerCommands } from './commands/'

const routers = {
    commands: routerCommands,
}

export const registerRouters: ScamprRegisterFunction = (app) => {
    for (const command of routers.commands) {
        app.command(command.path, command.toRegister)
    }
}
