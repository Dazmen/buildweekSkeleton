import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import './App.css';

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
