import React from 'react';
import './Head.scss';
import logo from '../../../images/logo.png';
class Head extends React.Component {
  state = {};

  render() {
    return (<div>
      <div className="Head">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="heading">
          <h1>SORTING <br></br> VISUALIZER</h1>
        </div>
      </div>
      
  </div>
      );
  }
}

export default Head;
