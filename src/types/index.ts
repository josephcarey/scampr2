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
}

export type BoltAction = (input: BoltActionInput) => Promise<void>

export interface BoltCommandInput {
    command: string
    ack: BoltAck
    say: BoltSayRespond
}

export type BoltCommand = (input: BoltCommandInput) => Promise<void>

// export interface BoltResponse {
//     text: string
//     blocks: BoltResponseBlock[]
// }

export type BoltResponse = string

export type BoltResponseBlock =
    | BoltResponseBlockHeader
    | BoltResponseBlockAction
    | BoltResponseBlockSection

export interface BoltResponseBlockHeader {
    type: 'header'
    text: BoltResponseBlockText
}

export interface BoltResponseBlockAction {
    type: 'actions'
    elements: BoltResponseBlockElement[]
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
