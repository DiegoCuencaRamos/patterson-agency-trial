import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShowcasePage from '../components/ShowcasePage'
import CartPage from '../components/CartPage'

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/"><ShowcasePage /></Route>
            <Route path="/cart"><CartPage /></Route>
        </Switch>
    </BrowserRouter>
)

export default AppRouter