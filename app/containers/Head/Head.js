import React from 'react';
import './Head.scss';
import logo from '../../images/logo.png';
class Head extends React.Component {
  state = {};

  render() {
    return (
      <div className="Head">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="heading ">
          <h1>SORTING VISUALIZER</h1>
        </div>
      </div>
    );
  }
}

export default Head;
