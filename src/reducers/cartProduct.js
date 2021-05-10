const inicialState = []

const cartProductReducer = (state = inicialState, action) => {
    switch (action.type) {
        case 'cartProduct/addProduct': 
            return [
                ...state,
                action.payload
            ]
        case 'cartProduct/removeProduct':
            return state.filter(product => product.id !== action.payload)
        default:
            return state
    }
}

export default cartProductReducer