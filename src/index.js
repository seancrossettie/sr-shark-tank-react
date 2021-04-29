import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { CssBaseline } from '@material-ui/core';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
