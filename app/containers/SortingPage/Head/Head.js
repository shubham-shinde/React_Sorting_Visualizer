import React from 'react';
import './Head.scss';
import logo from '../../../images/logo.png';
// import { DiGhostSmall } from 'react-icons/di';
import { MdSort, MdDehaze, MdMenu } from 'react-icons/md';
class Head extends React.Component {
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
                <MdMenu />
              </div>
            </button>
          </div>
          <div className="Head_logo">
            <div className="logo">
              <MdSort size="7rem" />
            </div>
            <div className="heading">
              <h1>
                SORTING <br></br> VISUALIZER
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;
