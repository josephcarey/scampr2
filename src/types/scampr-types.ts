import { BoltApp, BoltResponse } from '.'

export type ScamprResponder = (inputString?: string) => Promise<BoltResponse>

export type ScamprRegisterFunction = (app: BoltApp) => void
