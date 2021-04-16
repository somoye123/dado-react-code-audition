import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CommitViewerPage } from '../pages';
import '../App.css';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/commit" component={CommitViewerPage} />
      </Switch>
    </>
  );
}
