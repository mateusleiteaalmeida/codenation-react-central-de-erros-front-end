import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Pages/Home';
import cadastro from './Pages/Register';
import Painel from './Pages/Painel';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={cadastro} />
      <Route exact path="/app" component={Painel} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

