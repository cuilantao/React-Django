import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import {withCookies, useCookies, Cookies} from "react-cookie"
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import SignInPage from './Signinpage'
import Mainpage from './Mainpage'

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(["cur_user"]);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => (<SignInPage cookies={{cookies, setCookie, removeCookie}}/>)}/>
          <Route exact path='/mainpage' render={() => (<Mainpage cookies={{cookies, setCookie, removeCookie}}/>)}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
