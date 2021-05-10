import React from 'react'
import { useSelector } from 'react-redux'
import { getSumary } from '../../utils/selectors'
import { Link } from 'react-router-dom'
import cart from '../../assets/icons/carrito.svg'


const HeaderCart = () => {
    // 1. Get store
    const cartProducts = useSelector(state => state.cartProducts)
    // 2. Utils
    const { count, price } = getSumary(cartProducts)

    // 3. Render
    return (
        <div className="header-cart">
            <Link to="/cart" className="header-cart__link">
                <img 
                    className="header-cart__icon"
                    src={cart} 
                />
                <span className="header-cart__counter">{count}</span>
            </Link>

            <div className="header-cart__info">
                <span className="header-cart__price">{price} €</span>
                <span className="header-cart__text">Mi carrito</span>
            </div>
        </div>
    )
}

export default HeaderCart