import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import GrommetApp from 'grommet/components/App';
import Box from 'grommet/components/Box';

import Nav from 'components/Nav.jsx';
import Home from 'components/Home.jsx';
import Partners from 'components/Partners.jsx';
import Joining from 'components/Joining.jsx';
import Forms from 'components/Forms.jsx';
import Parents from 'components/Parents.jsx';
import Team from 'components/Team.jsx';

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
        <Route path='/partners' component={Partners} />
        <Route path='/join' component={Joining} />
        <Route path='/forms' component={Forms} />
        <Route path='/parents' component={Parents} />
        <Route path='/team' component={Team} />
      </Box>
    </GrommetApp>
  </HashRouter>
);

export default App;
