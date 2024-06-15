import { Camper } from '../../types'

export const roomNumberFilter: (
    campers: Camper[],
    searchString: string
) => Camper[] = (campers, searchString) =>
    campers.filter((camper) =>
        camper.roomNumber.toLowerCase().includes(searchString.toLowerCase())
    )
