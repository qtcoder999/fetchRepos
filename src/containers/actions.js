import { FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE, FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS } from "./constants"

export const fetchRepos = () => ({ type: FETCH_REPOS })
export const fetchReposSuccess = () => ({ type: FETCH_REPOS_SUCCESS })
export const fetchReposFailure = () => ({ type: FETCH_REPOS_FAILURE })

export const fetchUserDetails = (name) => ({ type: FETCH_USER_DETAILS, name })
export const fetchUserDetailsSuccess = () => ({ type: FETCH_USER_DETAILS_SUCCESS })