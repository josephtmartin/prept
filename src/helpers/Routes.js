import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import FlashCard from '../views/FlashCard';
import NotFound from '../views/NotFound';

export default function Routes() {
  return (
      <Switch>
        <Route
        exact
        path='/'
        component={() => <Home/>}
        />
        <Route
        exact
        path='/flash-card'
        component={() => <FlashCard/>}
        />
        <Route component={NotFound}/>
      </Switch>
  );
}
