import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './search/Search';
import Header from './header/Header';
import About from './about/About';
import './App.module.scss';
import NotFound from './error/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/about' component={About} />
        <Route component={NotFound} />
        {/* <Route path='/404' component={NotFound} /> */}
        {/* <Redirect to='/404' /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
