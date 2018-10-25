

import React, {Component} from 'react';

import {
  withRouter,
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Home from './home';
import Page1 from './page1';
import Counter from './counter';

import './main.less'

const ROUTES = ['/','/page1','/counter']

class Main extends Component {
  constructor(props) {
    super(props)
    this.route = this.props.history.location.pathname.split('/')
    this.state = {
      current: this.route[1] || '/',
    }
    if (!ROUTES.includes(this.route[1])) {
      this.props.history.replace('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props && nextProps) {
      this.setState({
        current: nextProps.history.location.pathname.split('/')[1],
      })
    }
  }

  render() {
    return (
      <BrowserRouter basename='/'>
        <div className='main'>
          <ul>
            <li><Link to="/">首页1</Link></li>
            <li><Link to="/page1">Page1</Link></li>
            <li><Link to="/counter">Counter</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/counter" component={Counter}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({

    }, dispatch),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)
