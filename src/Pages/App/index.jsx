import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Product from '../Product'
import Products from '../Products'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/v1/', element: <Home /> },
    { path: '/v1/ver-producto', element: <Product /> },
    { path: '/v1/productos', element: <Products /> },
  ])

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App