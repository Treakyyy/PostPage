import { all } from "redux-saga/effects";
import { commentWatcher } from "./commentSaga";
import { customersWatcher } from "./customerSaga";


export function* rootWatcher () {
    yield all([commentWatcher(), customersWatcher()])
}