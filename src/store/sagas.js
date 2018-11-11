import { put, takeEvery } from 'redux-saga/effects'

import { GET_HTTP_DATA } from './actionTypes'

import { getDataList } from './actionCreators'

import axios from 'axios';

function* mySaga() {
    yield takeEvery(GET_HTTP_DATA, fetchUser);
}

function* fetchUser() {

    try {
        const res = yield axios.get('https://www.easy-mock.com/mock/5be6d8c6e1206563e04dfbd9/reactlisst/getlist');
        const data = res.data.data.list;
        const action = getDataList(data)
        yield put(action)
    } catch (error) {
        console.log('网络请求失败')
    }


    // axios.get('https://www.easy-mock.com/mock/5be6d8c6e1206563e04dfbd9/reactlisst/getlist').then((res) => {

    //     const data = res.data.data.list;
    //     const action = getDataList(data)
    //     // store.dispatch(action)
    //     put(action)
    // })
}


export default mySaga