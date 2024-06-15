import { Camper, CamperRoom } from '../../types'

export const mapCampersToRooms: (campers: Camper[]) => CamperRoom[] = (
    campers
) => {
    // map in order to deal with uniqueness
    const rooms = new Map()

    //initialize all the rooms
    for (const student of campers) {
        rooms.set(student.roomNumber, [])
    }

    // make an entry in each room
    for (const student of campers) {
        const currentStudentsInRoom = rooms.get(student.roomNumber)
        rooms.set(student.roomNumber, [...currentStudentsInRoom, student])
    }

    // convert to an array
    return [...rooms].map(([name, value]) => ({
        roomNumber: name,
        campers: [...value],
    }))
}
