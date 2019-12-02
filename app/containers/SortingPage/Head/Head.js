import React from 'react';
import './Head.scss';
import logo from '../../../images/logo.png';
import {DiGhostSmall} from "react-icons/di";
class Head extends React.Component {
  state = {};

  render() {
    return (<div>
      <div className="Head">
        <div className="Head_button">
           <button className="sidebutton">
            <div className='symbol'><DiGhostSmall/ ></div>
           </button>
        </div>
        <div className="Head_logo">
           <div className="logo">
              <img src={logo}></img>
            </div>
          <div className="heading">
              <h1>SORTING <br></br> VISUALIZER</h1>
          </div>
        </div>

        </div>
     
        
        
      
  </div>
      );
  }
}

export default Head;
