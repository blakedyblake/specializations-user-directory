import React from "react";
import {Switch, Route} from 'react-router-dom'
import App from './App.jsx'
const Router = ()=>{
    <Switch>
        <Route path='/'>
            <App/>
        </Route>
    </Switch>
}

export default Router;