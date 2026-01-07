import {Route, Routes} from 'react-router-dom'
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Home from './Pages/MainPages/Home'
import About from './Pages/MainPages/About'
import Contact from './Pages/MainPages/Contact'
import Navigation from './Pages/MainPages/Navigation'
import ProtectedRoute from './auth/ProtectedRoute'
import ViewDetails from './Pages/MainPages/ViewDetails'
import AddToCart from './Pages/MainPages/AddToCart'
import { CartProvider } from './Context/CartContext'
import BuyNow from './Pages/MainPages/BuyNow'

function App() {
  
  return (
    <CartProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/about' element={<ProtectedRoute><About/></ProtectedRoute>}/>
      <Route path='/contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
      <Route path='/productDetails/:id' element={<ProtectedRoute><ViewDetails/></ProtectedRoute>}/>
      <Route path='/cart' element={<ProtectedRoute><AddToCart/></ProtectedRoute>}/>
      <Route path='/buy' element={<ProtectedRoute><BuyNow/></ProtectedRoute>}/>
    </Routes>
    </CartProvider>
  )
}

export default App
