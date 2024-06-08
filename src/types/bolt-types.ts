// Bolt Types Below

import { BoltResponse } from './bolt-response-types'

export interface BoltApp {
    action: (path: string, action: BoltAction) => void
    command: (path: string, command: BoltCommand) => void
    error: (errorFunction: (error: unknown) => Promise<void>) => void
    start: (port: number) => Promise<void>
}

export type BoltAck = () => Promise<void>
export type BoltSayRespond = (message: BoltResponse) => Promise<void>

export interface BoltActionInput {
    ack: BoltAck
    action: {
        value: string
    }
    respond: BoltSayRespond
    plain_text_input: string
    dispatch_action: boolean
}

export type BoltAction = (input: BoltActionInput) => Promise<void>

export interface BoltActionRegistration {
    actionString: string
    toRegister: BoltAction
}

export interface BoltCommandInput {
    command: {
        text: string
    }
    ack: BoltAck
    say: BoltSayRespond
}

export type BoltCommand = (input: BoltCommandInput) => Promise<void>

export interface BoltCommandRegistration {
    path: string
    toRegister: BoltCommand
}
