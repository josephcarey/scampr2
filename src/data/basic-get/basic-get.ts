const baseUrl = 'https://api.campmanagement.com/v1'

export const basicGet = async (url: string) => {
    const campsiteToken = process.env.CAMPSITE_TOKEN

    if (!campsiteToken) {
        throw new Error(`Env CAMPSITE_TOKEN not defined!`)
    }

    const headers = {
        'X-API-Key': campsiteToken,
        'X-Camp-Initials': 'DSC',
    }

    const fullUrl = `${baseUrl}${url}`

    const response = await fetch(fullUrl, {
        headers,
    })

    return await response.json()
}
