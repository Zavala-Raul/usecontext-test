import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartPreview() {
  const { cartPreviewProducts, countProductsCart, removeProductFromCart } = useContext(CartContext)

  return (
    <div className="cart-preview">
      <button type="button" className="cart-preview__button" aria-label="Cart">
        <svg
          className="cart-preview__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span className="cart-preview__badge">{countProductsCart}</span>
      </button>
      <div className="cart-preview__dropdown">
        {cartPreviewProducts.length === 0 && <p>El carrito está vacío.</p>}
        <ul className="cart-preview__list">
          {cartPreviewProducts.map((item) => (
            <li key={item.id} className="cart-preview__item">
              <span className="cart-preview__name">{item.name}</span>
              <span className="cart-preview__quantity">×{item.quantity}</span>
              <span className="cart-preview__price">${item.price}</span>
              <button
                type="button"
                className="button button--danger cart-preview__remove"
                aria-label={`Remove 1 of ${item.quantity} ${item.name}`}
                onClick={() => removeProductFromCart(item.id)}
              >
                Remove 1
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CartPreview
