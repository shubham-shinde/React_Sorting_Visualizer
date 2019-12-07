import React from 'react';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import shivam from '../../images/shivam.jpg';
import shubham from '../../images/shubham.jpg';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
// components

// icons

// Images

import Banner from '../common/assets/images/Main.png';

function Header() {
  return (
    <div className="Header">
      <div className="side-tray" alt="react-boilerplate - Logo">
        <div className="Head_logo">
          <div className="logo">
            <img src={logo}></img>
          </div>
          <div className="heading">
            <h1>
              ALGO <br></br>VISUALIZER
            </h1>
          </div>
        </div>
        <div className="content">
          <NavLink to={'/'} exact activeClassName="active">
            <li className="content-li">
              <div className="open"></div>
              <div className="tag">SORTING </div>
            </li>
          </NavLink>
          <NavLink to={'/pathfinding'} exact activeClassName="active">
            <li className="content-li">
              <div className="open"></div>
              <div className="tag"> SHORTEST PATH </div>
            </li>
          </NavLink>
        </div>
        <br></br>

        <div className="profile">
          <div className="github">
            <div>
              <span>Soure Code </span>
              <span className="logo">
                <GoMarkGithub />
              </span>
            </div>
          </div>
          <div className="portfolio">
            <div className="photo">
              <img src={shubham}></img>
            </div>
            <div className="text_p">
              <div>Shubham Shinde</div>
              <div className="text_p_link">
                <a href="https://github.com/shubham-shinde">
                  Portfolio <FaExternalLinkAlt />
                </a>{' '}
              </div>
            </div>
          </div>
          <div className="portfolio">
            <div className="photo">
              <img src={shivam}></img>
            </div>
            <div className="text_p">
              <div>Shivam Srivastava</div>
              <div className="text_p_link">
                <a href="https://github.com/shivam1534       ">
                  Portfolio <FaExternalLinkAlt />{' '}
                </a>{' '}
              </div>
            </div>
          </div>
        </div>

        {/* <div className='help'>Help</div> */}
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
