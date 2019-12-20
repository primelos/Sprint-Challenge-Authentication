import React from 'react';
import logo from './logo.svg';
import './App.css';



// import { Route } from 'react-router-dom';
import { Route } from 'react-router-dom';

import RegisterJoker from './component/RegisterJoker';
// import Login from './components/Login';

function App() {
  return (
    <div>
      <h1>Testing</h1>
      <Route path='/register' component={RegisterJoker} />
      {/* <Route path='login' component={Login} /> */}
    </div>
  );
}

export default App;