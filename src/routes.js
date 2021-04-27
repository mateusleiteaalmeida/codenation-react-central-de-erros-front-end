import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Pages/Home';
import cadastro from './Pages/Register';
// import Interface from './Pages/interface';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={cadastro} />
      {/* <Route exact path="/app" component={interface} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;

