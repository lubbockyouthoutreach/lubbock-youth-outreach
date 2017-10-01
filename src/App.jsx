import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import GrommetApp from 'grommet/components/App';
import Box from 'grommet/components/Box';

import Nav from 'components/Nav.jsx';
import Foot from 'components/Footer.jsx';
import Home from 'components/Home.jsx';
import Parents from 'components/Parents.jsx';

const App = () => (
  <HashRouter>
    <GrommetApp
      centered={false}
      inline={false}
    >
      <Box full>
        {/* Load the header */}
        <Nav />

        {/* Load the events page by default */}
        <Route
          exact
          path='/'
          render={() => (
            <Redirect to='/' />
          )}
        />

        {/* Set the children of the primary component */}
        <Route path='/home' component={Home} />
        <Route path='/parents' component={Parents} />

        {/* Load the footer */}
        <Foot />
      </Box>
    </GrommetApp>
  </HashRouter>
);

export default App;
