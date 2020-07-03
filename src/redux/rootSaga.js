import { getUserDetails, getRepos } from "../containers/sagas";

import { all, fork } from "redux-saga/effects";

export default function* () {
    yield all([
        fork(getRepos),
        fork(getUserDetails)
    ]);
}
