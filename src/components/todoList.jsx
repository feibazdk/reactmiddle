import React, { Component } from 'react';
// import { getInputChangeAction, getAddListAction, getDelsrowAction, getDataList, getDataListRedux } from '../store/actionCreators'

import { getHttpList, getInputChangeAction, getAddListAction, getDelsrowAction } from '../store/actionCreators'
import store from '../store'

// import axios from 'axios';

import TodoListUI from './todoListUI'

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState();

        // subscribe 帮助我们订阅 store 的改变
        store.subscribe(() => {
            // 帮我们湖区 store 中的内容
            this.setState(store.getState())
        });
    }

    componentDidMount() {
        // axios.get('https://www.easy-mock.com/mock/5be6d8c6e1206563e04dfbd9/reactlisst/getlist').then((res) => {
        //     console.log(res.data.data.list)

        //     const data = res.data.data.list;
        //     const action = getDataList(data)
        //     console.log(action)
        //     store.dispatch(action)
        // })

        // const action = getDataListRedux();

        // store.dispatch(action)

        const action = getHttpList();

        store.dispatch(action)
    }

    render() {
        return <div>
            <TodoListUI
                inputVal={this.state.inputVal}
                list={this.state.list}
                addList={this.addList}
                valueChange={this.valueChange}
                delsrow={this.delsrow} />
        </div>
    }

    // 获取输入框的值
    valueChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)

        // dispatch -- 帮助我们派发 store
        store.dispatch(action)
    }

    // 将输入框的值输出到按钮
    addList() {
        // const action = {
        //     type: ADD_LIST
        // }

        const action = getAddListAction()

        store.dispatch(action)
    }

    // 删除每一行
    delsrow(e, index) {
        console.log(index)
        // const action = {
        //     type: DELS_ROW,
        //     index: index
        // }

        const action = getDelsrowAction(index)

        store.dispatch(action)
    }
}