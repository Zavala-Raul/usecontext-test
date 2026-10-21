import Header from './components/Header'
import CartProvider from './context/CartProvider'

function App() {
  return <>
    <CartProvider>
      <Header />
    </CartProvider>
  </>
}

export default App
