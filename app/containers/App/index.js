/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './index.scss';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Header and Footer
import Header from 'components/Header';
import Footer from 'components/Footer';

//SIDEBAR
import Sidebar from "react-sidebar";

import AlgorithmList from '../SortingPage/AlgorithmList/AlgorithmList';
import SortingBox from '../SortingPage/SortingBox/SortingBox';
import Head from '../SortingPage/Head/Head';
import ButtonBox from '../SortingPage/ButtonBar/ButtonBar'

import GlobalStyle from '../../global-styles';

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
        <meta name="description" content="Sorting Visualizer"/>
        </Helmet>
      <div className="grand-father">
        {/* <button className="sidebutton">
          <h1 className='symbol'>≔</h1>
          <h1 className='symbol'>≔</h1>
        </button> */}
        <Header/>


        <div className='big-godfather'>
          <Switch>
            <Route path="/pathfinding">
              <div className="godfather">
                <Head />
                {/* <ButtonBox/> */}
                <div className="main">
                  {/* <SortingBox /> */}
                </div>
                <AlgorithmList/>
              </div>
            </Route>
            <Route path="/">
              <div className="godfather">
                <Head />
                <ButtonBox/>
                <div className="main">
                  <SortingBox />
                </div>
                <AlgorithmList/>
              </div>
            </Route>
          </Switch>
        </div>

      </div>
        

        <GlobalStyle />
      </div>
    );
  }
}

export default App;