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
// import Sidebar from "react-sidebar";

import AlgorithmList from '../SortingPage/AlgorithmList/AlgorithmList';
import SortingBox from '../SortingPage/SortingBox/SortingBox';
import Head from '../SortingPage/Head/Head';
import ButtonBox from '../SortingPage/ButtonBar/ButtonBar'

import GlobalStyle from '../../global-styles';

const mql = window.matchMedia(`(min-width: 1000px)`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebarDocked: mql.matches,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

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
        {/* <Sidebar
        sidebar={<Header/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        docked={this.state.sidebarDocked}
        styles={{ sidebar: { background: "white" } }}
      >
      </Sidebar> */}


{/* 
        <Header/> */}


        <div className='big-godfather'>
          <Switch>
            {/* <Route path="/pathfinding">
              <div className="godfather">
                <Head onSetSidebarOpen={this.onSetSidebarOpen} />
                <div className="main">
                </div>
                <AlgorithmList/>
              </div>
            </Route> */}
            <Route path="/">
              <div className="godfather">
                <Head onSetSidebarOpen={this.onSetSidebarOpen} />
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