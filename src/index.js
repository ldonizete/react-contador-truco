import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Colors from './styles/settings/Colors'
import Reset from './styles/generic/Reset'

ReactDOM.render(
  <Fragment>
    <Colors />
    <Reset />
    <App />
  </Fragment>,
  document.getElementById('root')
);