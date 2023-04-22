import './app.css'
import Products from './components/products'
import Addproduct from './components/addproduct'
import { Routes, Route, Link } from 'react-router-dom' 
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 
  return (

    
 
    <div>
    <Link to={'Products'}>
     Products
    </Link>
    <Link to={'Addproduct'}>
     Addproduct
    </Link>

    <Routes>
     <Route path='/Products' element={<Products />} />
     <Route path='/Addproduct' element={<Addproduct />} />
    

     </Routes>

<Products/>
<Addproduct/>
   </div>
)

 }
 

export default App
