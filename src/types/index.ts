export type ScamprResponder = () => Promise<BoltResponse>

export type ScamprRegisterFunction = (app: BoltApp) => void

// Bolt Types Below

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
    command: string
    ack: BoltAck
    say: BoltSayRespond
}

export type BoltCommand = (input: BoltCommandInput) => Promise<void>

export interface BoltCommandRegistration {
    path: string
    toRegister: BoltCommand
}

export interface BoltResponse {
    text: string
    blocks: BoltResponseBlock[]
}

export type BoltResponseBlock =
    | BoltResponseBlockHeader
    | BoltResponseBlockAction
    | BoltResponseBlockSection
    | BoltResponseBlockInput

export interface BoltResponseBlockHeader {
    type: 'header'
    text: BoltResponseBlockText
}

export interface BoltResponseBlockAction {
    type: 'actions'
    elements: BoltResponseBlockElement[]
}

export interface BoltResponseBlockInput {
    type: 'input'
    label: {
        type: 'plain_text'
        text: string
        emoji: boolean
    }
    element: {
        type: 'plain_text_input'
        action_id: string
    }
}

export type BoltResponseBlockElement = BoltResponseBlockElementButton

export interface BoltResponseBlockElementButton {
    type: 'button'
    text: BoltResponseBlockText
    value: string
    action_id: string
}

export interface BoltResponseBlockSection {
    type: 'section'
    text: BoltResponseBlockText
    accessory?: BoltResponseBlockAccessory
}

export interface BoltResponseBlockText {
    type: 'mrkdwn' | 'plain_text'
    text: string
    emoji?: boolean
}

export type BoltResponseBlockAccessory = BoltResponseBlockElementButton
