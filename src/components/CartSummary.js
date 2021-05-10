import React from 'react'
import { useSelector } from 'react-redux'
import { getSumary } from '../utils/selectors'

const Sumary = () => {
    // 1. Get store
    const cartProducts = useSelector(state => state.cartProducts)
    // 2. Utils
    const { count, price } = getSumary(cartProducts)

    // 3. Render
    return (
        <div className="cart-summary">
            <div className="cart-sumary__info">
                <span className="cart-sumary__count">{count} articulo{count > 0 ? 's' : ''}</span>
                <span className="cart-sumary__price">{price} €</span>
            </div>

            <div className="cart-summary__apply">
                <button className="cart-summary__btn">Finalizar compra</button>
            </div>
        </div>
    )
}

export default Sumary