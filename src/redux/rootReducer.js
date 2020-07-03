import { combineReducers } from "redux";
import { gitRepoReducer } from "../containers/reducers";


export const rootReducer = combineReducers({

    repos: gitRepoReducer

})