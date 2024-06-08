import { Camper } from '../../types'

export const fuzzyNameFilter: (
    campers: Camper[],
    searchString: string
) => Camper[] = (campers, searchString) =>
    campers.filter(
        (camper) =>
            camper.preferredName
                .toLowerCase()
                .includes(searchString.toLowerCase()) ||
            camper.firstName
                .toLowerCase()
                .includes(searchString.toLowerCase()) ||
            camper.lastName.toLowerCase().includes(searchString.toLowerCase())
    )
