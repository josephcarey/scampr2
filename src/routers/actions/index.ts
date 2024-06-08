import { homeButtonActionRegistration } from './home-button-action/home-button-action'
import { studentDetailButtonActionRegistration } from './student-detail-button-action/student-detail-button-action'
import { studentSearchIntroButtonActionRegistration } from './student-search-intro-button-action/student-search-intro-button-action'
import { studentSearchResultsButtonActionRegistration } from './student-search-results-input-action/student-search-results-input-action'

export const routerActionRegistrations = [
    studentSearchIntroButtonActionRegistration,
    studentSearchResultsButtonActionRegistration,
    studentDetailButtonActionRegistration,
    homeButtonActionRegistration,
]
