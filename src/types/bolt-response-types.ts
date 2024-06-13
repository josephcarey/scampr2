export interface BoltResponse {
    text: string
    blocks: BoltResponseBlock[]
}

export type BoltResponseBlock =
    | BoltResponseBlockHeader
    | BoltResponseBlockAction
    | BoltResponseBlockSection
    | BoltResponseBlockInput
    | BoltResponseBlockImage

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

export interface BoltResponseBlockImage {
    type: 'image'
    alt_text: string
    image_url: string
}

export type BoltResponseBlockElement = BoltResponseBlockElementButton

export interface BoltResponseBlockElementButton {
    type: 'button'
    text: BoltResponseBlockText
    value: string
    action_id: string
}

export interface BoltResponseBlockElementImage {
    type: 'image'
    image_url: string
    alt_text: string
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

export type BoltResponseBlockAccessory =
    | BoltResponseBlockElementButton
    | BoltResponseBlockElementImage
