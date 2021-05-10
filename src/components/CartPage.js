import React from 'react'
import CartContextProvider from '../contexts/CartContext'
import Header from './header/Header'
import Separator from './Separator'
import Container from './Container'
import ProductList from './ProductList'
import Sumary from './CartSummary'
import Discount from './CartDiscount'


const CartPage = () => (
    <CartContextProvider>
        <Header />
        <Separator />
        <div className="cart-page__content">
            <Container>
                <main className="cart-page__main">
                    <ProductList />
                </main>
                <aside className="cart-page__aside">
                    <Sumary />
                    <Discount />
                </aside>
            </Container>
        </div>  
    </CartContextProvider>
)

export default CartPage