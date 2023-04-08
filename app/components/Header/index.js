import React from 'react';
import logo from '../../images/logo.png';
import {NavLink} from 'react-router-dom';
import shivam from '../../images/shivam.jpg';
import vinayak from '../../images/vinayak.png';
import swati from '../../images/swati.png';
import shubham from '../../images/shubham.jpg';
import FaExternalLinkAlt from 'react-icons/lib/fa/external-link.js';
import GoMarkGithub from 'react-icons/lib/go/mark-github.js';
import './index.scss';
// components

// icons

// Images

import Banner from '../common/assets/images/Main.png';

const MiniPortfolio = ({name, GitHubLink, ImgLink}) => (
  <div className="portfolio">
    <div className="photo">
      <img alt='shubham' src={ImgLink}></img>
    </div>
    <div className="text_p">
      <div>{name}</div>
      <div className="text_p_link">
        <a href={GitHubLink}>
          Portfolio <FaExternalLinkAlt />
        </a>{' '}
      </div>
    </div>
  </div>
)

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
            <span className="logo">
              <GoMarkGithub size="2rem" />
            </span>
            <a
              href="https://github.com/shubham-shinde/React_Sorting_Visualizer"
              target="_blank"
            >
              <span>Soure Code </span>
              <FaExternalLinkAlt />
            </a>
          </div>
          <MiniPortfolio GitHubLink="https://github.com/shubham-shinde" ImgLink={shubham} name="Shubham Shinde" />
          <MiniPortfolio GitHubLink="https://github.com/shivam1534" ImgLink={shivam} name="Shivam Srivastava" />
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
