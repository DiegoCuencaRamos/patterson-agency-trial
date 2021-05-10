import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// Locals
import store from './store'
import { startSetShowcaseProducts } from './actions/showcaseProduct'
import AppRouter from './routers/AppRouter'
// Font awesome
import '../node_modules/@fortawesome/fontawesome-free/js/brands'
import '../node_modules/@fortawesome/fontawesome-free/js/solid'
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome'
// Normalice CSS
import '../node_modules/normalize.css/normalize.css'
// My custom CSS
import './styles/styles.scss'

const App = () => (
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </React.StrictMode>
)

const renderApp = async () => {
    try {
        await store.dispatch(startSetShowcaseProducts())
        ReactDOM.render(<App />, document.querySelector('#root'))
    } catch(e) {
        console.log(e)
    } 
    
}

renderApp()