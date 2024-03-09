import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Product from '../Product'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/ver-producto', element: <Product /> },
    // { path: '/my-order', element: <MyOrder /> },
    // { path: '/my-orders', element: <MyOrders /> },
    // { path: '/sign-in', element: <SignIn /> },
    // { path: '/*', element: <NotFound /> },
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