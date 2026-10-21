import { createContext } from "react"
import type { ProductPanelType } from "../types/ProductPanelType"
import type {ProductPreview}  from '../types/ProductPreview'
type CartContextValue = {
    productsPanel: ProductPanelType[],
    isLoadingPanelProducts: boolean,
    addProductToCart: (product:ProductPanelType)=>void,
    removeProductFromCart: (productId: number) => void,
    cartPreviewProducts:ProductPreview[],
    countProductsCart:number
}

export const CartContext = createContext<CartContextValue>({
    productsPanel: [],
    isLoadingPanelProducts: false,
    addProductToCart: ()=>{},
    removeProductFromCart: () => {},
    cartPreviewProducts:[],
    countProductsCart:0
})

