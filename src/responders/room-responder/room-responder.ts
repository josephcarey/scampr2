import { getAllCampers } from '../../data/fetch-all/fetch-all'
import { mapCampersToRooms } from '../../data/map-campers-to-rooms/map-campers-to-rooms'
import { roomNumberFilter } from '../../data/room-number-filter/room-number-filter'
import { getErrorMessage } from '../../messages/error-message/error-message'
import { getRoomSearchResultsMessage } from '../../messages/room-search-message/room-search-message'
import { ScamprResponder } from '../../types'
import { MAX_RECORDS } from '../../utils/constants'
import { homeResponder } from '../home-responder/home-responder'

export const roomResponder: ScamprResponder = async (inputString) => {
    console.log(`in roomResponder with text ${inputString}`)

    if (!inputString) return await homeResponder()

    const allCampers = await getAllCampers()
    const filteredStudents = roomNumberFilter(allCampers, inputString)

    if (filteredStudents.length > MAX_RECORDS) {
        return getErrorMessage(
            `Room search turned up too many results: ${filteredStudents.length} results returned for search input ${inputString}. Try a more specific search input.`
        )
    } else if (
        filteredStudents.length > 1 &&
        filteredStudents.length < MAX_RECORDS
    ) {
        const rooms = mapCampersToRooms(filteredStudents)

        return getRoomSearchResultsMessage(inputString ?? '', rooms)
    }

    return getErrorMessage(
        `Room search returned no results for ${inputString}. Make a different choice.`
    )
}
