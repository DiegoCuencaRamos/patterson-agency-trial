import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { removeCartProduct } from '../../actions/cartProduct'
import { addCartProduct } from '../../actions/cartProduct'
import { CartContext } from '../../contexts/CartContext'
import HoverDetails from './HoverDetails'
import Starts from './Starts'

const ProductItem = ({ id, title, price, image, rate }) => {
    // 1. Variables
    const dispatch = useDispatch()
    const isCart = useContext(CartContext)
    const productClass = !isCart ? 'product-slider__slide product' : 'product'
    const customTitle = title.split(' ').slice(0, 3).join(' ')
    title = !isCart ? title  : customTitle 

    // 4. Events
    let onProductClicked = isCart
    if(isCart) {
        onProductClicked = () => {}
    } else {
        onProductClicked = () => {
            const product = { id, title, price, image }
            dispatch(addCartProduct(product))
        }
    }

    let onRemovedClicked = () => {
        dispatch(removeCartProduct(id))
    }
    
    // 5. Render
    return (
        <article className={productClass} >
            <div 
                className="product__img-wrapper" 
                onClick={onProductClicked}
            >
                <img src={image} />
                <HoverDetails />
            </div>
            { !isCart && <Starts rate={rate} />}
            <h4 className="product__title">{title}</h4>
            <p className="product__price">{price} €</p>
            { isCart && <p className="product__remove" onClick={onRemovedClicked}><i className="fas fa-trash"></i></p> }
        </article>
    )
}

export default ProductItem