import { Camper } from '../../types'

export const idFilter: (campers: Camper[], id: string) => Camper[] = (
    campers,
    id
) => campers.filter((camper) => camper.id == id)
