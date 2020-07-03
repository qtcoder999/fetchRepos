import { FETCH_REPOS_SUCCESS, FETCH_USER_DETAILS_SUCCESS } from "./constants";

const INITIAL_STATE = {

    repoList: [],
    currentUserDetails: {}
}


export const gitRepoReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_REPOS_SUCCESS:

            return { ...state, repoList: action.repo };

        case FETCH_USER_DETAILS_SUCCESS:

            return { ...state, currentUserDetails: action.currentUserDetails }

        default:
            return state;
    }


} 