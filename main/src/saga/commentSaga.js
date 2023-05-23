import {put, takeEvery, call} from 'redux-saga/effects';
import { AddCommentAction, FETCH_COMMENT} from '../store/commentReducer';

const fetchComment = () => fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')

function* fetchCommentsWorker () {
    const data = yield call(fetchComment)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(AddCommentAction(json))
}

export function* commentWatcher () {
    yield takeEvery(FETCH_COMMENT, fetchCommentsWorker)
 }