// import { getAllCampers } from '../data/fetch-all/fetch-all'
import 'dotenv/config'
// import { createObjectCsvWriter } from 'csv-writer'
// import { Camper } from '../types'
import { getClasses } from '../data/get-classes/get-classes'

export const main = async () => {
    // const allCampers = await getAllCampers()
    const results = await getClasses()
    console.log(JSON.stringify(results, undefined, 2))
    // const sortedCampers = allCampers.sort((a: Camper, b: Camper) =>
    //     a.roomNumber.localeCompare(b.roomNumber)
    // )

    // const csvWriter = createObjectCsvWriter({
    //     path: OUTPUT_PATH,
    //     header: [
    //         { id: 'firstName', title: 'First Name' },
    //         { id: 'lastName', title: 'Last Name' },
    //         { id: 'preferredName', title: 'Name' },
    //         { id: 'roomNumber', title: 'Room Number' },
    //         { id: 'p1', title: 'P1' },
    //         { id: 'p2', title: 'P2' },
    //         { id: 'p3', title: 'P3' },
    //         { id: 'p4', title: 'P4' },
    //         { id: 'p5', title: 'P5' },
    //         { id: 'p6', title: 'P6' },
    //         { id: 'p7', title: 'P7' },
    //         { id: 'lessons', title: 'Lessons' },
    //     ],
    // })

    // console.log(`Writing csv ${OUTPUT_PATH}...`)

    // csvWriter
    //     .writeRecords(sortedCampers) // returns a promise
    //     .then(() => {
    //         console.log('\t...Done')
    //     })
}

main()
