import { basicGet } from '../basic-get/basic-get'

export const getAllCampers = async () => {
    const campsiteAllCamperReportId = process.env.CAMPSITE_REPORT_ID_ALL_CAMPERS

    if (!campsiteAllCamperReportId) {
        throw new Error(`Env CAMPSITE_TOKEN not defined!`)
    }

    const allCampers = await basicGet(
        `/report?section=campers&reportId=${campsiteAllCamperReportId}&pageLength=2500`
    )
    console.log(`getAllCampers found ${allCampers.length} results`)
    return allCampers
}
