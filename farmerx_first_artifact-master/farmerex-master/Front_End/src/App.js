import React from 'react';
import Account from "./components/Account.js";
import {EasybaseProvider} from 'easybase-react';
import ebconfig from './ebconfig.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/login.js';
import Nav from './components/Nav.js';
import './resources/App.css';

export default function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Router> 
        <div className='App'>
          <Nav />
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Account}/>
            <Route path='/dashboard' component={dash}/>
            <Route path='/' exact component={Home}/>
          </Switch>
        </div>
      </Router>
    </EasybaseProvider>
  );
}

const Home = () => (
  <div>
    <h1> Home Page</h1>
  </div>
)

const dash = () => (
  <div className='dashBoard'>
    <h1> Dashboard </h1>
  </div>
)
