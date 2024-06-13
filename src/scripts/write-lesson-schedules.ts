import { getAllCampers } from '../data/fetch-all/fetch-all'
import 'dotenv/config'
import { createObjectCsvWriter } from 'csv-writer'
import { Camper } from '../types'

const OUTPUT_FOLDER = './output/lesson-schedules'

type LessonEntry = {
    day: string
    time: string
    studio: string
    instrument: string
    name: string
}

export type studioTime = {
    time: string
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
}

const mapLessonEntries: (camper: Camper) => LessonEntry[] = (camper) =>
    camper.splitLessons.map((lesson) => ({
        name: camper.preferredName.trim(),
        day: lesson.day.trim(),
        time: lesson.time.replace(/[apm.]/gi, '').trim(),
        studio: lesson.studio.trim(),
        instrument: lesson.instrument.trim(),
    }))

export const main = async () => {
    const allCampers = await getAllCampers()

    const allLessonEntries = allCampers.flatMap((camper: Camper) =>
        mapLessonEntries(camper)
    )

    // write the entire originals
    const csvWriter = createObjectCsvWriter({
        path: `${OUTPUT_FOLDER}/raw-lessons.csv`,
        header: [
            { id: 'day', title: 'Day' },
            { id: 'name', title: 'Name' },
            { id: 'time', title: 'Time' },
            { id: 'studio', title: 'Studio' },
            { id: 'instrument', title: 'Instrument' },
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

    // add entries for each time represented in the lesson entries
    for (const lessonEntry of allLessonEntries) {
        const currentStudio = studios.get(lessonEntry.studio)
        currentStudio.set(lessonEntry.time, {
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
        })
    }

    // now fill in
    for (const lessonEntry of allLessonEntries) {
        const currentStudio = studios.get(lessonEntry.studio)
        const currentTime = currentStudio.get(lessonEntry.time)
        switch (lessonEntry.day) {
            case 'Monday':
                currentTime.monday = lessonEntry.name
                break
            case 'Tuesday':
                currentTime.tuesday = lessonEntry.name
                break
            case 'Wednesday':
                currentTime.wednesday = lessonEntry.name
                break
            case 'Thursday':
                currentTime.thursday = lessonEntry.name
                break
            case 'Friday':
                currentTime.friday = lessonEntry.name
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
                // days: value1,
            })),
        }
    })

    // sort the sub-arrays
    for (const studio of studioObjects) {
        studio.times.sort((a: studioTime, b: studioTime) =>
            a.time.localeCompare(b.time)
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
                { id: 'monday', title: 'Monday' },
                { id: 'tuesday', title: 'Tuesday' },
                { id: 'wednesday', title: 'Wednesday' },
                { id: 'thursday', title: 'Thursday' },
                { id: 'friday', title: 'Friday' },
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
