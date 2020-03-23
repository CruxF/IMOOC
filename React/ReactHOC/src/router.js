import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Category from './pages/category';
import Car from './pages/car';
import User from './pages/user';

export default ()=>(
  <BrowserRouter>
    <Switch>
      <Route path='/home' component={Home}></Route>
      <Route path='/category' component={Category}></Route>
      <Route path='/car' component={Car}></Route>
      <Route path='/user' component={User}></Route>
    </Switch>
  </BrowserRouter>
)