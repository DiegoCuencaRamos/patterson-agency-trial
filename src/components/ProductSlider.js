import React from 'react'
import { useSelector } from 'react-redux'
import Container from './Container'
import ProductItem from './product/ProductItem'

const ProductSlider = () => {
    // 1. Get store
    const products = useSelector(state => state.showcaseProducts)

    // 2. Render
    return (
        <section id="slider" className="product-slider">
            <Container>
                <div className="product-slider__wrapper">
                    <div id="slides" className="product-slider__slides">
                        { products.map(product => (
                            <ProductItem key={product.id} {...product}/>  
                        )) }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProductSlider