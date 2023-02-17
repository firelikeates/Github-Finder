import React, { Component, useState } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import Search from './Components/Search';
import Alert from './Components/Alert';
import About from './Components/About';
import UserDetailsPage from './Components/UserDetailsPage';
import GithubState from './Context/GithubState';

const App = (props)=>{

  const[users,Setusers] = useState([]);
  const [user,SetUser] = useState({});
  const [loading,SetLoading] = useState(false);
  const [alert,setAlert] = useState(null)
  const [clear,SetClear] = useState(false)


    return (
      <GithubState>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" render={
              props => (
                <div className="container"><br />
                  <Search  /*showlength={users.length > 0 ? true : false}*/ />
                  <Users {...props}  />
                </div>)
            } />
            <Route path="/about" component={About} />
            <Route exact path="/user/:login" render={props => (
              <UserDetailsPage {...props} />
            )} />
          </Switch>
        </BrowserRouter>
      </GithubState>
    )

}
export default App
