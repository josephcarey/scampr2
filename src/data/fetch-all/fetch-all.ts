import { basicGet } from '../basic-get/basic-get'
import { mapCamper } from '../camper-mapper/camper-mapper'

export const getAllCampers = async () => {
    const campsiteAllCamperReportId = process.env.CAMPSITE_REPORT_ID_ALL_CAMPERS

    if (!campsiteAllCamperReportId) {
        throw new Error(`Env CAMPSITE_TOKEN not defined!`)
    }

    const allCampers = await basicGet(
        `/report?section=campers&reportId=${campsiteAllCamperReportId}&pageLength=2500`
    )
    console.log(`getAllCampers found ${allCampers.length} results`)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return allCampers.map((camper: any) => mapCamper(camper))
}
