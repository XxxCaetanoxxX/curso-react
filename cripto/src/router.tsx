import {createBrowserRouter} from 'react-router-dom'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { NotFound } from './pages/notfound'
import { Layoult } from './components/layoult'

const router = createBrowserRouter([
    {
        element: <Layoult/>,
        children:[ 
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/detail/:cripto",
                element:<Detail/>
            },
            {
                path:"*",
                element:<NotFound/>
            }
        ]
    }
])

export {router}