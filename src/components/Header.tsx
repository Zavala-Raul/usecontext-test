import CartPreview from './CartPreview'
import Page from './Page'
import { useContext } from 'react'
import {CartContext} from '../context/CartContext'


function Header() {
  const {countProductsCart} = useContext(CartContext)
  return (
    <>
      <header className="navbar">
        <p className="navbar__brand">Shop</p>
        <div className="navbar__actions">
          <p className="navbar__count">Items: {countProductsCart}</p>
          <CartPreview />
        </div>
      </header>
      <Page />
    </>
  )
}

export default Header
