import { Camper } from '../../types'

export const fuzzyNameFilter: (
    campers: Camper[],
    searchString: string
) => Camper[] = (campers, searchString) =>
    campers.filter(
        (camper) =>
            camper.preferredName.includes(searchString) ||
            camper.firstName.includes(searchString) ||
            camper.lastName.includes(searchString)
    )
