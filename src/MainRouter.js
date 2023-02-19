import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home'

export default function MainRouter() {
  return (
    <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path='/login'>
            <Login/>
        </Route>
        <Route path='/register'>
            <Register/>
        </Route>
    </Switch>
  )
}
