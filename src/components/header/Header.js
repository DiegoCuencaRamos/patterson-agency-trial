import React from 'react'
import Container from '../Container'
import HeaderLogo from './HeaderLogo'
import HeaderCart from './HeaderCart'


const Header = () => (
    <header className="header">
        <Container>
            <HeaderLogo />
            <HeaderCart />
        </Container>
    </header>
)

export default Header