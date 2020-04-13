import React, { useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import AdminHome from './Admin/Home';
import HealthCentre from './Admin/HealthCentre';
import HealthCentreHome from './Health Centre/Home';
import HealthCentreUnderCentres from './Health Centre/HealthCentres';
import Users from './Health Centre/Users';
import UserRequest from './Health Centre/UserRequest';
import UserHome from './User/Home';
import MyRequest from './User/UserRequest';
import UserViewHealthCentre from './User/HealthCentres';
import Login from './Auth/Login';
import UserRegistration from './Auth/UserRegistration';
import {useHistory, Redirect} from 'react-router-dom';
import Cookie from "js-cookie";

const jwt = require('jsonwebtoken');

export default function Layout() {
  let history = useHistory();
  let token = Cookie.get('token')
    if(token === ''){
      history.push('/');
    }
    return (
      <div>
        <Switch>
          <Route path = "/login"  component ={Login} />
          <Route path = "/register"  component ={UserRegistration} />
          <Route path = "/admin-home"  component ={AdminHome} />
          <Route path = "/admin/health-centres"  component ={HealthCentre} />
          <Route path = "/health-centre-home"  component ={HealthCentreHome} />
          <Route path = "/health-centre/health-centres"  component ={HealthCentreUnderCentres} />
          <Route path = "/health-centre/users"  component ={Users} />
          <Route path = "/health-centre/user-request"  component ={UserRequest} />
          <Route path = "/user-home"  component ={UserHome} />
          <Route path = "/user/my-request"  component ={MyRequest} />
          <Route path = "/user/health-centres"  component ={UserViewHealthCentre} />
          <Route path="*" render={() => (<Redirect to="/" />)} />
        </Switch>
      </div>
    );
  }
