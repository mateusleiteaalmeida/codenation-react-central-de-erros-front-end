import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from './Pages/Login';
import cadastro from './Pages/Register';
import Painel from './Pages/Painel';
import Logs from './Pages/Logs';
import LogDetails from './Pages/LogsDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      <Route exact path="/logs" component={Logs} />
      <Route exact path="/logs/details/:id" component={LogDetails} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={cadastro} />
      <Route exact path="/app" component={Painel} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
