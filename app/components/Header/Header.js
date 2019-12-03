import React from 'react';
import logo from '../../images/logo.png';
import './Header.scss';
import {FaExternalLinkAlt} from 'react-icons/fa'

// components

// icons

// Images

import Banner from '../common/assets/images/Main.png';

function Header() {
  return (
    <div className="Header">
      <div  className='side-tray' alt="react-boilerplate - Logo">
      <div className="Head_logo">
        <div className="logo">
            <img src={logo}></img>
        </div>
        <div className="heading">
            <h1>ALGO <br></br>VISUALIZER</h1>
        </div>
      </div>
        <div className='content'>
          <li className='content-li'>
            <div className ='open'></div>
            <div className="tag">SORTING VISUALIZER</div>
          </li>
          <li className='content-li'>
            <div className='open'></div>
            <div className='tag'> SHORTEST PATH VISUALIZER</div>
          </li>
        </div>
        <div className='portfolio'>
            <div className='text_p'>View Portfolio</div>
            <div className='icon_p'><FaExternalLinkAlt/></div>
        </div>
        <div className='help'>Help</div>
        </div>
      {/* <a href="https://github.com/EvilSpark/react-redux-boilerplate/">
        
      </a> */}

      {/* <ul>
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="https://github.com/EvilSpark/react-redux-boilerplate">
          Github
        </a>
      </ul> */}
    </div>
  );
}

export default Header;
