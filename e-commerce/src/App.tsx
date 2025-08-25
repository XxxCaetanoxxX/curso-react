import {Home} from './pages/home'
import { Cart } from './pages/cart'
import { createBrowserRouter} from 'react-router-dom'

import {Layoult} from './components/layoult'

const router = createBrowserRouter([
  {
    element: <Layoult />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/cart",
        element: <Cart />
      }
    ]
  }
])

export {router};