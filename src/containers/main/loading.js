//loading

import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import './style.less'

class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loading) {
      this.setState({
        loading: nextProps.loading.status
      })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.loading === 'pendding' ?
          <div className='spin-load'>
            <Spin size='large' spinning={this.state.loading === 'pendding' ? true : false} />
          </div>
          : null
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loading)
