import { type ReactNode } from 'react'
import  useCart  from '../hooks/useCart'
import { CartContext } from './CartContext'

type CartProviderProps = {
    children: ReactNode
}

const CartProvider = ({children}:CartProviderProps) => {
  const {productsPanel, isLoadingPanelProducts,addProductToCart,removeProductFromCart,cartPreviewProducts,countProductsCart} = useCart()
  return (
    <CartContext.Provider 
      value={{
        productsPanel,
        isLoadingPanelProducts,
        addProductToCart,
        removeProductFromCart,
        cartPreviewProducts,
        countProductsCart
      }}
    >
      {children}  
    </CartContext.Provider>
  )
}

export default CartProvider
