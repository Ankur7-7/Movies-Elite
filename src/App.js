import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './Pages';
import * as ROUTES from './Constants/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>} />
        <Route path={ROUTES.SIGN_IN} element={<Signin/>} />
        <Route path={ROUTES.SIGN_UP} element={<Signup/>} />
        <Route path={ROUTES.BROWSE} element={<Browse/>} />
      </Routes>
    </Router>
  );
}

export default App;
