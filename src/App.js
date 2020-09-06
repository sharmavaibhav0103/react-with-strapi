import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import Routes from './Routes';
import Loadbar from './components/TopLoadbar';


function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Loadbar />
        <Routes />
      </Fragment>
    </Provider>
  );
}

export default App;
