import React, {Component} from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import {increment, decrement, reset} from '../../redux/actions';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
      return (
        <BrowserRouter basename='/counter'>
          <div>
              <div>当前计数为{this.props.counter_reducer.count}</div>
              <button onClick={() => this.props.actions.increment()}>自增
              </button>
              <button onClick={() => this.props.actions.decrement()}>自减
              </button>
              <button onClick={() => this.props.actions.reset()}>重置
              </button>
          </div>
        </BrowserRouter>
      )
  }
}

const mapStateToProps = (state) => {
    return {
        counter_reducer: state.counter_reducer
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      increment,decrement,reset
    }, dispatch),
  }
    // return {
    //     increment: () => {
    //         dispatch(increment())
    //     },
    //     decrement: () => {
    //         dispatch(decrement())
    //     },
    //     reset: () => {
    //         dispatch(reset())
    //     }
    // }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
