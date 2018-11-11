import React, { Component } from 'react';
import { Button, Input, List } from 'antd';

export default class TodoListUI extends Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return <div>
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <Input onChange={this.props.valueChange} value={this.props.inputVal} placeholder="Basic usage" style={{ width: '300px' }} />
                <Button onClick={this.props.addList} type="primary">Primary</Button>
            </div>
            <List
                style={{ width: '300px', marginTop: '10px', marginLeft: '10px' }}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => (
                    <List.Item>
                        {item} ---- <span onClick={ (e) => this.props.delsrow(e, index) } className="iconfont icon-shanchu"></span>
                    </List.Item>)
                }
            />
        </div>
    }
}