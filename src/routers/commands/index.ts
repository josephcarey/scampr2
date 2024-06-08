import { camperCommandRegistration } from './camper-command/camper-command.js'
import { scamprCommandRegistration } from './scampr-command/scampr-command.js'
import { studentCommandRegistration } from './student-command/student-command.js'

export const routerCommandRegistrations = [
    scamprCommandRegistration,
    camperCommandRegistration,
    studentCommandRegistration,
]
