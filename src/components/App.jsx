import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { HomePage, CommitViewerPage } from '../pages';
import '../App.css';

export default function App() {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage history={history} setSearchValue={setSearchValue} />
        </Route>
        <Route exact path="/commit">
          <CommitViewerPage
            searchValue={searchValue}
            loading={loading}
            setLoading={setLoading}
          />
        </Route>
      </Switch>
    </>
  );
}
