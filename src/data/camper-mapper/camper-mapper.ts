import { Camper, CamperLesson } from '../../types'

const BASE_IMAGE_FILE_PATH =
    'https://s3.amazonaws.com/camper_photos_bucket_ezf/'

const getImageFilePath: (filename: string) => string = (filename) =>
    `${BASE_IMAGE_FILE_PATH}${filename}`

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

const getMedFormUrl: (
    firstName: string,
    lastName: string,
    roomNumber: string
) => string = (firstName, lastName, roomNumber) =>
    `https://docs.google.com/forms/d/e/1FAIpQLSe0Hx8myFmhKLwgpjOkVBl7Aw1RsUMg0DDRvz9j1AwMkWKwnQ/viewform?usp=pp_url&entry.947813587=${firstName}&entry.164197953=${lastName}&entry.2103593477=${roomNumber}`

const getBehaviorFormUrl: (
    firstName: string,
    lastName: string,
    roomNumber: string
) => string = (firstName, lastName, roomNumber) =>
    `https://docs.google.com/forms/d/e/1FAIpQLScOGYkp_z_4t8jBRvdWXyJkTj8e5GkpkLnJoCt66XjrAycHhQ/viewform?usp=pp_url&entry.164197953=${lastName}&entry.947813587=${firstName}&entry.2103593477=${roomNumber}`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapCamper = (input: any): Camper => {
    // console.log(JSON.stringify(input, undefined, 2))
    const sessions = (input['2024 &gt; Session names (all)'] ?? []).split(', ')
    const fileName = input['Photo filename']
    const firstName = input['First name'] ?? '---'
    const lastName = input['Last name'] ?? '---'
    const preferredName = input['Preferred Name'] ?? '---'
    const roomNumber =
        (input['2024 Middle School Camp &gt; Room name'] ||
            input['2024 High School Camp &gt; Room name']) ??
        '---'
    return {
        firstName,
        lastName,
        preferredName,
        roomNumber,
        id: input['Camper ID'],
        dateOfBirth: input['Date of birth'],
        photoFileName: input['Photo filename'] ?? '---',
        p1: getClass(sessions, ' P1 ') ?? '---',
        p2: getClass(sessions, ' P2 ') ?? '---',
        p3: getClass(sessions, ' P3 ') ?? '---',
        p4: getClass(sessions, ' P4 ') ?? '---',
        p5: getClass(sessions, ' P5 ') ?? '---',
        p6: getClass(sessions, ' P6 ') ?? '---',
        p7: getClass(sessions, ' P7 ') ?? '---',
        lessons: input['Lessons notes'] ?? 'No Lessons',
        splitLessons: getSplitLessons(input['Lessons notes']),
        imageUrl: fileName ? getImageFilePath(fileName) : null,
        // sessions: input['2024 &gt; Session names (all)'],
        //:'Middle School Camp, MS - P1 - Concert Band, MS - P2 - Theatre Games, MS - P3 - Woodwind Choir, MS - P4 - Mask Making, MS - P5 - Concert Band, MS - P6 - Clay Sculpture, MS - P7 - Free Period',
        quickNotes: input['Quick note camper'] || 'No quick notes',
        primaryFamily: {
            address: {
                city: input['Primary family city'] || 'No city listed',
                state: input['Primary family state'] || 'No state listed',
            },
        },
        formUrls: {
            medForm: getMedFormUrl(preferredName, lastName, roomNumber),
            behaviorForm: getBehaviorFormUrl(
                preferredName,
                lastName,
                roomNumber
            ),
        },
    }
}
