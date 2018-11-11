import { CHANGE_INPUT_VALUE, ADD_LIST, DELS_ROW, HTTP_DATA, GET_HTTP_DATA } from './actionTypes'
// import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddListAction = () => ({
    type: ADD_LIST
})

export const getDelsrowAction = (index) => ({
    type: DELS_ROW,
    index
})

export const getDataList = (data) => ({
    type: HTTP_DATA,
    data
})

export const getHttpList = (data) => ({
    type: GET_HTTP_DATA
})

// export const getDataListRedux = () => {
//     return (dispatch) => {
//         console.log(dispatch)
//         axios.get('https://www.easy-mock.com/mock/5be6d8c6e1206563e04dfbd9/reactlisst/getlist').then((res) => {

//             const data = res.data.data.list;
//             const action = getDataList(data)

//             dispatch(action)
//         })
//     }
// }