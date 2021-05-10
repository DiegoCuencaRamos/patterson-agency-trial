import { combineReducers } from 'redux'

import showcaseProductReducer from './reducers/showcaseProduct'
import cartProductReducer from './reducers/cartProduct'

const rootReducer = combineReducers({
    showcaseProducts: showcaseProductReducer,
    cartProducts: cartProductReducer,
})

export default rootReducer