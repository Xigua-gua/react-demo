import React, {Component} from 'react';

import {
  BrowserRouter,
} from 'react-router-dom';

import difference from 'lodash/difference'
import _ from 'lodash';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
        let x = difference([1, 2], [1, 3])
        console.log('lodash difference',x);
        let w = _.chunk(['a', 'b', 'c', 'd'], 2);;
        console.log('chunk',w);
    }

    render() {
        return (
          <BrowserRouter basename='/home'>
            <div>
                <h2>首页</h2><br/>
                ss当前计数：{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>自增</button>
            </div>
          </BrowserRouter>
        )
    }
}
