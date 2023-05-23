import {put, takeEvery, call} from 'redux-saga/effects';
import { AddCustomerAction, FETCH_CUSTOMER } from '../store/customerReducer';

const fetchCustomers = () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

function* fetchCustomersWorker () {
    const data = yield call(fetchCustomers)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(AddCustomerAction(json))
}

export function* customersWatcher () {
   yield takeEvery(FETCH_CUSTOMER, fetchCustomersWorker)
}