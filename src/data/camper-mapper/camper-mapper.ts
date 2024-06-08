// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapCamper = (input: any) => ({
    lastName: input['Last name'],
    firstName: input['First name'],
    id: input['Camper ID'],
    dateOfBirth: input['Date of birth'],
    photoFileName: input['Photo filename'],
    preferredName: input['Preferred Name'],
    roomNumber: input['2024 Middle School Camp &gt; Room name'],
    sessions: input['2024 &gt; Session names (all)'],
    //:'Middle School Camp, MS - P1 - Concert Band, MS - P2 - Theatre Games, MS - P3 - Woodwind Choir, MS - P4 - Mask Making, MS - P5 - Concert Band, MS - P6 - Clay Sculpture, MS - P7 - Free Period',
})
