import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CommitViewerPage } from '../pages';
import '../App.css';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage setSearchValue={setSearchValue} />
        </Route>
        <Route exact path="/commit">
          <CommitViewerPage searchValue={searchValue} />
        </Route>
      </Switch>
    </>
  );
}
