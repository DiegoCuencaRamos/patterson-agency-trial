import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './product/ProductItem'

const ProductList = () => {
    // 1. Get store
    const products = useSelector(state => state.cartProducts)

    // 2. Render
    return (
        <section className="product-list">
            <div className="product-list__header">
                <h2>Carrito</h2>
            </div>
            {products.map((product, index) => <ProductItem key={index} {...product} />)}
        </section>
    )
}

export default ProductList