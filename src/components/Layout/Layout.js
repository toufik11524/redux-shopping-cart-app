import React from 'react'
// import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import Products from '../Products/Products'

const Layout = () => {
    // const showCart = useSelector((state) => state.cart.showCart);

    return (
        <div>
            <Header />
            <Products />
        </div>
    )
}

export default Layout;