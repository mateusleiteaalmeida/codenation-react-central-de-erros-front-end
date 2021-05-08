import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './Pages/Login';
import Logs from './Pages/Logs';
import Register from './Pages/Register';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login }/>
      <Route exact path="/logs" component={ Logs } />
      <Route exact path="/register" component={ Register } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
