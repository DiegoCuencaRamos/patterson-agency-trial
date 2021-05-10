const inicialState = []

const showcaseProductReducer = (state = inicialState, action) => {
    switch (action.type) {
        case 'showcaseProduct/setProducts': 
            return action.payload
        default:
            return state
    }
}

export default showcaseProductReducer