import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const PrivateRoute=({component:Component,...rest})=>(

    <Route {...rest}
    render={props =>
    localStorage.getItem("token") ? (
     <Component {...props} />)
     : ( <Redirect to ={{
       pathname:"/signin",
    state: {from:props.location}
    }}
    />
     )
    }
    />
    );

export default  PrivateRoute