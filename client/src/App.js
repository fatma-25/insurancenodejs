import React, { Component } from "react";

import { Switch, Route, BrowserRouter} from "react-router-dom"
import './App.css';
import Signin from "./Component/signin"
import Signup from "./Component/signup"
import Homepage from "./Component/homepage"
import PrivateRoute from './PrivateRoute'


export default class App extends Component {
  
  constructor(){
    super()
  }
 
   render() {
     return (
      <div>
        
  
       
       
       <BrowserRouter>
        <Switch>
         <Route exact path="/signin" component={Signin}/>
         <Route exact path="/signup" component={Signup}/>
         <PrivateRoute path='/session' component={Homepage}/>

        </Switch>
        </BrowserRouter>  
 
       
             </div>
 
     )
     }}
 
 
 
 
 