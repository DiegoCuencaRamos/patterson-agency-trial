import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const HeaderLogo = () => (
    <Link to="/">
        <img
            className="header__logo"
            src={logo}
        />
    </Link>
)

export default HeaderLogo