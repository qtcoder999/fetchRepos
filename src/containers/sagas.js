import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_REPOS_SUCCESS, FETCH_USER_DETAILS, FETCH_USER_DETAILS_SUCCESS, FETCH_REPOS } from './constants';

function fetchRepos() {
    return axios.get('https://api.github.com/repositories');
}

export function* getRepos() {
    try {
        let resp = yield call(fetchRepos);

        yield put({
            type: FETCH_REPOS_SUCCESS,
            repo: resp.data,
        });

    } catch (e) {
        console.error(e);
    }
}

function fetchUserDetails(action) {
    return axios.get('https://api.github.com/users/' + action.name);
}

export function* getUserDetails(action) {

    try {
        let resp = yield call(fetchUserDetails, action);

        yield put({
            type: FETCH_USER_DETAILS_SUCCESS,
            currentUserDetails: resp.data,
        });

    } catch (e) {
        console.error(e);
    }
}

export default function* repoSaga() {
    yield takeLatest(FETCH_REPOS, getRepos);
    yield takeLatest(FETCH_USER_DETAILS, getUserDetails);
}

