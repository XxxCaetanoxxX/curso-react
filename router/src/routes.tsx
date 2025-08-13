import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/home'
import { Sobre } from "./pages/sobre";
import { Contato } from "./pages/contato";
import { Produto } from "./pages/produto";
import { NotFound } from "./pages/notfound";
import { Layoult } from './components/layoult'

const router = createBrowserRouter([
    {
        element: <Layoult />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/sobre",
                element: <Sobre />
            },
            {
                path: "/contato",
                element: <Contato />
            },
            {
                path: "/produto/:id",
                element: <Produto />
            },
            //essa rota abaixo, de erro, tem sempre que ser a última
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export { router };