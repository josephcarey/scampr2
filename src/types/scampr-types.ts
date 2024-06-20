import { BoltApp, BoltResponse } from '.'

export type ScamprResponder = (inputString?: string) => Promise<BoltResponse>

export type ScamprRegisterFunction = (app: BoltApp) => void

export type CamperLesson = {
    day: string
    time: string
    instrument: string
    studio: string
}

export type Camper = {
    lastName: string
    firstName: string
    id: string
    dateOfBirth: string
    photoFileName: string
    preferredName: string
    roomNumber: string
    p1: string
    p2: string
    p3: string
    p4: string
    p5: string
    p6: string
    p7: string
    imageUrl: string | null
    lessons: string
    splitLessons: CamperLesson[]
    quickNotes: string
    primaryFamily: {
        address: {
            city: string
            state: string
        }
    }
    formUrls: {
        medForm: string
        behaviorForm: string
    }
    // sessions: string
}

export type CamperRoom = {
    roomNumber: string
    campers: Camper[]
}
