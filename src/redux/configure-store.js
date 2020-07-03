import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "./rootReducer"
import createSagaMiddleware from 'redux-saga';
import repoSaga from "../containers/sagas"


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(repoSaga);
