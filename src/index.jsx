import React from 'react';
import { render } from 'react-dom';

// Ensures that Grommet styles are applied to the entire app
import 'styles/grommet.scss';
import App from './App.jsx';

render(
  <App />,
  document.getElementById('app'),
);
