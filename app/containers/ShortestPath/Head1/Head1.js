import React from 'react';
import './Head1.scss';
import logo from '../../../images/logo.png';
import { DiGhostSmall } from 'react-icons/di';
class Head1 extends React.Component {
  render() {
    return (
      <div>
        <div className="Head">
          <div className="Head_button">
            <button
              onClick={() => this.props.onSetSidebarOpen(true)}
              className="sidebutton"
            >
              <div className="symbol">
                {' '}
                <DiGhostSmall />
              </div>
            </button>
          </div>
          <div className="Head_logo">
            <div className="logo">
              <img src={logo}></img>
            </div>
            <div className="heading">
              <h1>
                SHORTEST <br></br> PATH
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Head1;
