import React from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Index from './Main.js';
import AdminHome from './Admin/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" exact component = {Index} />
        <Layout/>
      <AdminHome/>
      </Switch>
    </div>
  );
}

export default App;
