import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import GrommetApp from 'grommet/components/App';
import Box from 'grommet/components/Box';

import Nav from 'components/Nav.jsx';
import Home from 'components/home/Home.jsx';
import About from 'components/about/About.jsx';
import GetInvolved from 'components/get-involved/GetInvolved.jsx';
import Parents from 'components/Parents.jsx';

const App = () => (
  <HashRouter>
    <GrommetApp
      centered={false}
      inline={false}
    >
      <Box full>
        <Nav />

        {/* Load the home page by default */}
        <Route
          exact
          path='/'
          render={() => (
            <Redirect to='/home' />
          )}
        />

        {/* Set the children of the primary component */}
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/get-involved' component={GetInvolved} />
        <Route path='/parents' component={Parents} />
      </Box>
    </GrommetApp>
  </HashRouter>
);

export default App;
