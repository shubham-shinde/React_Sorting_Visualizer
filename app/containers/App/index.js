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

import AlgorithmList from '../AlgorithmList/AlgorithmList';
import SortingBox from '../SortingBox/SortingBox';
import Head from '../Head/Head';
import ButtonBox from '../ButtonBar/ButtonBar'

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
      <meta name="description" content="Sorting Visualizer"/>
      </Helmet>
      <Header/>
      <div className="godfather">
        <Switch>
          <Route path="/pathfinding">
            <div>
              <Head />
              {/* <ButtonBox/> */}
              <div className="main">
                {/* <SortingBox /> */}
              </div>
              <AlgorithmList/>
            </div>
          </Route>
          <Route path="/">
            <div>
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
      

      <GlobalStyle />
    </div>
  );
}
