

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BMap from 'BMap'
import './style.less'

class PageMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.initMap()
  }

  // 地图 初始化
  initMap() {
    this.map = new BMap.Map("bd_map");
    this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    const myCity = new BMap.LocalCity();
    myCity.get((result)=>{
      this.map.centerAndZoom(new BMap.Point(result.center.lng,result.center.lat),11);
    })
  }

  resetMap() {
    this.map.clearOverlays()
    this.state.moniData && this.state.moniData.length && this.state.moniData.forEach((item) => {
      this.addMarker(item)
    })
  }
  render() {
    return (
      <BrowserRouter basename={'/page-map'}>
        <div id='bd_map' className='bd_map'></div>
      </BrowserRouter>
    );
  }
}

PageMap.propTypes = {

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

export default connect(mapStateToProps,mapDispatchToProps)(PageMap)
