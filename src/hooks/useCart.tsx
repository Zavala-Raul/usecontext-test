import { useEffect, useState } from "react"
import type { ProductPanelType } from "../types/ProductPanelType"
import type {ProductPreview} from '../types/ProductPreview'
import { productsData } from "../data/products"

const useCart = () => {
  const [productsPanel, setProductsPanel] = useState<ProductPanelType[]>([])
  const [isLoadingPanelProducts, setIsLoadingPanelProducts] = useState<boolean>(false)
  const [cartPreviewProducts,setCartPreviewProducts] = useState<ProductPreview[]>([])
  useEffect(() => {
    const fetchProducts = async () => {
        setIsLoadingPanelProducts(true)
        await new Promise(resolve => setTimeout(resolve, 3000))
        setIsLoadingPanelProducts(false)
        const productsPanelData: ProductPanelType[] = productsData.map(productData => ({
            
                id: productData.id,
                title: productData.title,
                price: productData.price,
                description: productData.description
            
        }))
        setProductsPanel(productsPanelData)
    }
    void fetchProducts()
  },[])

  const addProductToCart = (product:ProductPanelType) => {
    setCartPreviewProducts(currentCart=>{
      const existingProduct = currentCart.find(item=>item.id==product.id)
      if(existingProduct){
        return currentCart.map(currentProduct=>currentProduct.id == product.id ? 
          {
            ...currentProduct,
            quantity: currentProduct.quantity+1
          }
          :
          currentProduct
        )
      }
      return [
        ...currentCart,
        {
          id:product.id,
          name: product.title,
          quantity: 1,
          price: product.price
        }
      ]
    })
  }

  const removeProductFromCart = (productId: number) => {
    setCartPreviewProducts(currentCart =>
      currentCart
        .map(item => item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  return {
    productsPanel,
    isLoadingPanelProducts,
    addProductToCart,
    removeProductFromCart,
    cartPreviewProducts,
    countProductsCart:cartPreviewProducts.reduce((total, item) => total + item.quantity, 0)
  }
}

export default useCart
