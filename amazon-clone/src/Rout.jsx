import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Payments from './Home/Payments/Payments';
import Cart from './Home/Cart/Cart';
import Orders from './Home/Orders/Orders';
import LayOut from './components/LayOut/LayOut';
import SignUp from './Home/Auth/SignUp/SignUp'
import Landing from './Home/Landing/Landing';
import Results from './Home/Results/Results';
import ProductDetail from './Home/ProductDeatail/ProductDetail';



const Rout = () => {
  return (
     
   <Routes>
      <Route path='/' element={<LayOut />}>
        <Route index element={<Landing />} />
        <Route path='auth' element={<SignUp />} />
        <Route path='payment' element={<Payments />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/category/:categoryName' element={<Results />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='orders' element={<Orders />} />
      </Route>
    </Routes>
     

  )
   
}

export default Rout