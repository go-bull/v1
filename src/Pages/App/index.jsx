// import React from 'react'
// import { useRoutes, BrowserRouter } from 'react-router-dom'
// import Home from '../Home'
// import Product from '../Product'
// import Products from '../Products'

// const AppRoutes = () => {
//   let routes = useRoutes([
//     { path: '/v1/', element: <Home /> },
//     { path: '/v1/ver-producto', element: <Product /> },
//     { path: '/v1/productos', element: <Products /> },
//   ])

//   return routes
// }

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AppRoutes />
//     </BrowserRouter>
//   )
// }
// import React ,{ Component } from "module";
import Home from '../Home'
import Product from '../Product'
import Products from '../Products'
import { HashRouter, Route, Routes } from 'react-router-dom';

// class App extends Component{

function App(){
    return(
    <>
      <HashRouter>
       <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/producto/:product' element={<Product/>}/>
          <Route path='/categorias/:cat' element={<Products/>}/>
          <Route path='/*' element={<p>FAILEDDDDDDDDDDDDDDDD</p>}/>
        </Routes>
      </HashRouter>
    </>
   )
    }

export default App