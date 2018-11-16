

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
import {Home, Page1, Counter,PageMap } from './router';
import {ROUTES,ROUTE_MENU} from './data'
import './main.less'

class Main extends Component {
  constructor(props) {
    super(props)
    this.route = this.props.history.location.pathname.split('/')
    this.state = {
      current: this.route[1] || 'home',
    }
    if (!ROUTES.includes(this.route[1])) {
      this.props.history.replace('home')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props && nextProps) {
      this.setState({
        current: nextProps.history.location.pathname.split('/')[1],
      })
    }
  }

  handleToLink(path) {
    this.setState({
      current: path
    },() => {
      document.querySelector("#top").scrollIntoView()
    })
  }

  _renderLink() {
    return (
      <div className='link_tab'>
        {
          ROUTE_MENU.map(item => {
            return (
              <span
                onClick={() => this.handleToLink(item.path)}
                key={item.path}
                className='link_item'><Link to={item.path}>{item.name}</Link></span>
            )
          })
        }
      </div>
    );
  }

  _renderContent() {
    return (
      <div className='content'>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/page1" component={Page1}/>
          <Route path="/counter" component={Counter}/>
          <Route path="/page-map" component={PageMap}/>
        </Switch>
      </div>
    );
  }
  render() {
    return (
      <BrowserRouter basename='/'>
        <div className='main'>
          {this._renderLink()}
          {this._renderContent()}
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
