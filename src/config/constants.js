/*
 * ACTIONS
 */

// Auth
export const LOAD_USER_SUCCESS     = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE     = 'LOAD_USER_FAILURE'

// Search Term
export const SET_SEARCH_TERM   = 'SET_SEARCH_TERM'
export const SET_SEARCH_TAG    = 'SET_SEARCH_TAG'
export const RESET_SEARCH_TERM = 'RESET_SEARCH_TERM'

// Member Search
export const CLEAR_PROJECT_SEARCH       = 'CLEAR_PROJECT_SEARCH'
export const PROJECT_SEARCH_FAILURE     = 'PROJECT_SEARCH_FAILURE'
export const PROJECT_SEARCH_SUCCESS     = 'PROJECT_SEARCH_SUCCESS'
export const LOAD_MORE_PROJECTS         = 'LOAD_MORE_PROJECTS'

/*
 * URLs
 */

export const DOMAIN = process.env.domain || 'topcoder.com'
export const CONNECT_DOMAIN = `connect.${DOMAIN}`
export const ACCOUNTS_APP_CONNECTOR_URL = 'http://local.accounts.topcoder-dev.com/connector.html'

// FIXME: Change to process.env.INTERNAL_API after added to webpack
export const INTERNAL_API = `https://internal-api.${DOMAIN}/v3`
export const V3_API_URL = `https://api.${DOMAIN}/v3`

export const v3IdentityUrl = `${V3_API_URL}/users`

export const memberSearchTagUrl = `${INTERNAL_API}/tags/`

export const memberSearchUrl = `${INTERNAL_API}/members/_search/`