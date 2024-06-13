import { Camper, CamperLesson } from '../../types'

const getClass: (sessions: string[], text: string) => string = (
    sessions,
    text
) => (sessions.filter((item) => item.includes(text))[0] ?? '').slice(10)

const getSplitLessons: (lessons: string | undefined) => CamperLesson[] = (
    lessons
) => {
    if (!lessons || lessons.length == 0) {
        return []
    } else {
        return (lessons ?? '').split(', ').map((lesson) => {
            const [day, time, instrument, studio] = lesson.split('-')
            return {
                day: day.trim(),
                time: time.trim(),
                instrument: instrument.trim(),
                studio: studio.trim(),
            }
        })
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapCamper = (input: any): Camper => {
    // console.log(JSON.stringify(input, undefined, 2))
    const sessions = (input['2024 &gt; Session names (all)'] ?? []).split(', ')
    return {
        lastName: input['Last name'] ?? '---',
        firstName: input['First name'] ?? '---',
        id: input['Camper ID'],
        dateOfBirth: input['Date of birth'],
        photoFileName: input['Photo filename'] ?? '---',
        preferredName: input['Preferred Name'] ?? '---',
        roomNumber: input['2024 Middle School Camp &gt; Room name'] ?? '---',
        p1: getClass(sessions, ' P1 ') ?? '---',
        p2: getClass(sessions, ' P2 ') ?? '---',
        p3: getClass(sessions, ' P3 ') ?? '---',
        p4: getClass(sessions, ' P4 ') ?? '---',
        p5: getClass(sessions, ' P5 ') ?? '---',
        p6: getClass(sessions, ' P6 ') ?? '---',
        p7: getClass(sessions, ' P7 ') ?? '---',
        lessons: input['Lessons notes'] ?? 'No Lessons',
        splitLessons: getSplitLessons(input['Lessons notes']),
        imageUrl: `https://s3.amazonaws.com/camper_photos_bucket_ezf/${input['Photo filename']}`,
        // sessions: input['2024 &gt; Session names (all)'],
        //:'Middle School Camp, MS - P1 - Concert Band, MS - P2 - Theatre Games, MS - P3 - Woodwind Choir, MS - P4 - Mask Making, MS - P5 - Concert Band, MS - P6 - Clay Sculpture, MS - P7 - Free Period',
        quickNotes: input['Quick note camper'] || 'No quick notes',
    }
}
