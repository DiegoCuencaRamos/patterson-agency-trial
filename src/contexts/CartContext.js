import React from 'react'

const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {
    const value = {
        isCart: true
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider as default }