import { CHANGE_INPUT_VALUE, ADD_LIST, DELS_ROW, HTTP_DATA } from './actionTypes'

const defaultState = {
    inputVal: "请输入内容",
    list: []
}

export default (state = defaultState, action) => {

    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;

        return newState;
    }

    if (action.type === ADD_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = "";

        return newState
    }

    if (action.type === DELS_ROW) {
        console.log(action.index)
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);

        return newState;
    }

    if (action.type === HTTP_DATA) {
        console.log(action)
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;

        return newState;
    }
    return state
}