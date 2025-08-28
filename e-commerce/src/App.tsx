import {Home} from './pages/home'
import { Cart } from './pages/cart'
import { createBrowserRouter} from 'react-router-dom'

import {Layoult} from './components/layoult'
import { Detail } from './pages/detail'

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
      },
      {
        path:"/product/:id",
        element: <Detail />
      }
    ]
  }
])

export {router};