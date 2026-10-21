import { useContext } from 'react'
import AddButton from './AddButton'
import { CartContext } from '../context/CartContext'

function Panel() {
  const {productsPanel,isLoadingPanelProducts} = useContext(CartContext)
  return (

    <>
      {
        isLoadingPanelProducts ? (<h1>Cargando Productos . . . </h1>) :
        productsPanel.map(product => (
          <article className="product-card">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <AddButton product={product}/>
          </article>
        ))
      }
    </>
  )
}

export default Panel
