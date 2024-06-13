import { basicGet } from '../basic-get/basic-get'

const SESSION_PREFIX = 'MS'

type Class = {
    name: string
    enrolled: number
    capacity: number
    waitlist: number
}

export const getClasses: () => Promise<Class[]> = async () => {
    const results = await basicGet(`/enrollment?year=2024`)

    // get just the sessions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sessions = results.sessions.map((result: any) => ({
        name: result.name,
        enrolled: result.currentCount,
        capacity: result.capacity,
        waitlist: 0,
    }))

    // filter out the root sessions, the other week, and the lesson blocks
    const filteredSessions = sessions.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (session: any) =>
            session.name.includes(SESSION_PREFIX) &&
            !session.name.includes('Private Lessons')
    )

    // const classesIncludingWaitlists = sessions.map((session) => {
    //     const []
    // })

    console.log(JSON.stringify(filteredSessions, undefined, 2))
    return [{ name: 'test', enrolled: 1, capacity: 10, waitlist: 5 }]
}
