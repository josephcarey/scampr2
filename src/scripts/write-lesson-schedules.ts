import { getAllCampers } from '../data/fetch-all/fetch-all'
import 'dotenv/config'
import { createObjectCsvWriter } from 'csv-writer'
import { Camper } from '../types'
import { isNumeric } from '../utils'
import * as fs from 'fs'

const OUTPUT_FOLDER = './output/lesson-schedules'

type LessonEntry = {
    day: string
    time: string
    sortTime: number
    studio: string
    instrument: string
    name: string
    classAtTime: string
}

export type studioTime = {
    time: string
    sortTime: number
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    mondayClass: string
    tuesdayClass: string
    wednesdayClass: string
    thursdayClass: string
    fridayClass: string
}

const mapLessonEntries: (camper: Camper) => LessonEntry[] = (camper) =>
    camper.splitLessons.map((lesson) => {
        const lessonTime = lesson.time.replace(/[apm.]/gi, '').trim()
        // const sortTime = lessonTime.substring(0, )
        return {
            name: camper.preferredName.trim(),
            day: lesson.day.trim(),
            time: lessonTime,
            sortTime: getSortTime(lessonTime),
            studio: lesson.studio.trim().replace(/\s/g, ''),
            instrument: lesson.instrument.trim(),
            classAtTime: getClassAtTime(camper, lessonTime),
        }
    })

const getClassAtTime: (camper: Camper, lessonTime: string) => string = (
    camper,
    lessonTime
) => {
    switch (lessonTime) {
        case '8:00':
        case '8:30':
            return camper.p1
            break
        case '9:00':
        case '9:30':
        case '10:00':
            return camper.p2
            break
        case '10:30':
        case '11:00':
            return camper.p3
            break
        case '12:30':
        case '1:00':
        case '1:30':
            return camper.p4
            break
        case '2:00':
        case '2:30':
            return camper.p5
            break
        case '3:00':
        case '3:30':
        case '4:00':
            return camper.p6
            break
        case '4:30':
        case '5:00':
            return camper.p7
            break
    }
    return 'no class found'
}

const getSortTime: (timeString: string) => number = (timeString) => {
    const [hours, minutes] = timeString.split(':')
    if (isNumeric(hours) && isNumeric(minutes)) {
        const modifiedHours =
            Number(hours) < 7 ? Number(hours) + 12 : Number(hours)
        return modifiedHours * 60 * 60 * 1000 + Number(minutes) * 60 * 1000
    }
    throw new Error(
        `Something went wrong: timeString ${timeString} could not be parsed.`
    )
}

const defaultStudioTime = {
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    mondayClass: '',
    tuesdayClass: '',
    wednesdayClass: '',
    thursdayClass: '',
    fridayClass: '',
    sortTime: 0,
}

const defaultTimes = [
    { key: '8:00', value: { ...defaultStudioTime } },
    { key: '8:30', value: { ...defaultStudioTime } },
    { key: '9:00', value: { ...defaultStudioTime } },
    { key: '9:30', value: { ...defaultStudioTime } },
    { key: '10:00', value: { ...defaultStudioTime } },
    { key: '10:30', value: { ...defaultStudioTime } },
    { key: '11:00', value: { ...defaultStudioTime } },
    { key: '11:30', value: { ...defaultStudioTime } },
    { key: '12:00', value: { ...defaultStudioTime } },
    { key: '12:30', value: { ...defaultStudioTime } },
    { key: '1:00', value: { ...defaultStudioTime } },
    { key: '1:30', value: { ...defaultStudioTime } },
    { key: '2:00', value: { ...defaultStudioTime } },
    { key: '2:30', value: { ...defaultStudioTime } },
    { key: '3:00', value: { ...defaultStudioTime } },
    { key: '3:30', value: { ...defaultStudioTime } },
    { key: '4:00', value: { ...defaultStudioTime } },
    { key: '4:30', value: { ...defaultStudioTime } },
    { key: '5:00', value: { ...defaultStudioTime } },
    { key: '5:30', value: { ...defaultStudioTime } },
]

export const main = async () => {
    const allCampers = await getAllCampers()

    const allLessonEntries = allCampers.flatMap((camper: Camper) =>
        mapLessonEntries(camper)
    )

    await fs.mkdirSync(`${OUTPUT_FOLDER}`)
    await fs.mkdirSync(`${OUTPUT_FOLDER}/with-classes`)

    // write the entire originals
    const csvWriter = createObjectCsvWriter({
        path: `${OUTPUT_FOLDER}/raw-lessons.csv`,
        header: [
            { id: 'day', title: 'Day' },
            { id: 'name', title: 'Name' },
            { id: 'time', title: 'Time' },
            { id: 'sortTime', title: 'Sort Time' },
            { id: 'studio', title: 'Studio' },
            { id: 'instrument', title: 'Instrument' },
            { id: 'classAtTime', title: 'Class at Time' },
        ],
    })

    console.log(`Writing csv...`)
    csvWriter
        .writeRecords(allLessonEntries) // returns a promise
        .then(() => {
            console.log('\t...Done')
        })

    const studios = new Map()

    // brute force create an entry for each studio
    for (const lessonEntry of allLessonEntries) {
        studios.set(lessonEntry.studio, new Map())
    }

    // Add entries for all times so that the spreadsheets are consistent
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [_key, value] of studios) {
        for (const defaultTime of defaultTimes) {
            value.set(defaultTime.key, defaultTime.value)
        }
    }

    // add entries for each time represented in the lesson entries
    for (const lessonEntry of allLessonEntries) {
        const currentStudio = studios.get(lessonEntry.studio)
        currentStudio.set(lessonEntry.time, { ...defaultStudioTime })
    }

    // now fill in
    for (const lessonEntry of allLessonEntries) {
        const currentStudio = studios.get(lessonEntry.studio)
        const currentTime = currentStudio.get(lessonEntry.time)
        switch (lessonEntry.day) {
            case 'Monday':
                if (currentTime.monday) {
                    console.log(
                        `Studio ${lessonEntry.studio} on day ${lessonEntry.day} at time ${lessonEntry.time} already has student ${currentTime.monday} (trying to add student ${lessonEntry.name})`
                    )
                }
                currentTime.monday = lessonEntry.name
                currentTime.mondayClass = lessonEntry.classAtTime
                break
            case 'Tuesday':
                if (currentTime.tuesday) {
                    console.log(
                        `Studio ${lessonEntry.studio} on day ${lessonEntry.day} at time ${lessonEntry.time} already has student ${currentTime.tuesday} (trying to add student ${lessonEntry.name})`
                    )
                }
                currentTime.tuesday = lessonEntry.name
                currentTime.tuesdayClass = lessonEntry.classAtTime
                break
            case 'Wednesday':
                if (currentTime.wednesday) {
                    console.log(
                        `Studio ${lessonEntry.studio} on day ${lessonEntry.day} at time ${lessonEntry.time} already has student ${currentTime.wednesday} (trying to add student ${lessonEntry.name})`
                    )
                }
                currentTime.wednesday = lessonEntry.name
                currentTime.wednesdayClass = lessonEntry.classAtTime
                break
            case 'Thursday':
                if (currentTime.thursday) {
                    console.log(
                        `Studio ${lessonEntry.studio} on day ${lessonEntry.day} at time ${lessonEntry.time} already has student ${currentTime.thursday} (trying to add student ${lessonEntry.name})`
                    )
                }
                currentTime.thursday = lessonEntry.name
                currentTime.thursdayClass = lessonEntry.classAtTime
                break
            case 'Friday':
                if (currentTime.friday) {
                    console.log(
                        `Studio ${lessonEntry.studio} on day ${lessonEntry.day} at time ${lessonEntry.time} already has student ${currentTime.friday} (trying to add student ${lessonEntry.name})`
                    )
                }
                currentTime.friday = lessonEntry.name
                currentTime.fridayClass = lessonEntry.classAtTime
                break
        }
    }

    // parse these into arrays for sorting and csv input
    const studioObjects = [...studios].map(([name, value]) => {
        return {
            studio: name,
            times: [...value].map(([name1, value1]) => ({
                time: name1,
                ...value1,
                sortTime: getSortTime(name1),
                // days: value1,
            })),
        }
    })

    // sort the sub-arrays
    for (const studio of studioObjects) {
        studio.times.sort(
            (a: studioTime, b: studioTime) => a.sortTime - b.sortTime
        )
    }

    // sort the root array for good measure
    studioObjects.sort((a, b) => a.studio.localeCompare(b.studio))

    // write the csvs
    for (const studio of studioObjects) {
        const path = `${OUTPUT_FOLDER}/${studio.studio}.csv`
        const csvWriter = createObjectCsvWriter({
            path,
            header: [
                { id: 'time', title: 'Time' },
                // { id: 'sortTime', title: 'Sort Time' },
                { id: 'monday', title: 'Monday' },
                // { id: 'mondayClass', title: 'Mon Class' },
                { id: 'tuesday', title: 'Tuesday' },
                // { id: 'tuesdayClass', title: 'Tue Class' },
                { id: 'wednesday', title: 'Wednesday' },
                // { id: 'wednesdayClass', title: 'Wed Class' },
                { id: 'thursday', title: 'Thursday' },
                // { id: 'thursdayClass', title: 'Thu Class' },
                { id: 'friday', title: 'Friday' },
                // { id: 'fridayClass', title: 'Fri Class' },
            ],
        })

        console.log(`Writing csv ${path}...`)
        csvWriter
            .writeRecords(studio.times) // returns a promise
            .then(() => {
                console.log('\t...Done')
            })
    }

    // write the class compare csvs
    for (const studio of studioObjects) {
        const path = `${OUTPUT_FOLDER}/with-classes/${studio.studio}-with-classes.csv`
        const csvWriter = createObjectCsvWriter({
            path,
            header: [
                { id: 'time', title: 'Time' },
                // { id: 'sortTime', title: 'Sort Time' },
                { id: 'monday', title: 'Monday' },
                { id: 'mondayClass', title: 'Mon Class' },
                { id: 'tuesday', title: 'Tuesday' },
                { id: 'tuesdayClass', title: 'Tue Class' },
                { id: 'wednesday', title: 'Wednesday' },
                { id: 'wednesdayClass', title: 'Wed Class' },
                { id: 'thursday', title: 'Thursday' },
                { id: 'thursdayClass', title: 'Thu Class' },
                { id: 'friday', title: 'Friday' },
                { id: 'fridayClass', title: 'Fri Class' },
            ],
        })

        console.log(`Writing csv ${path}...`)
        csvWriter
            .writeRecords(studio.times) // returns a promise
            .then(() => {
                console.log('\t...Done')
            })
    }
}

main()
