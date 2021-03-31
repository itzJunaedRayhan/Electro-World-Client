import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
