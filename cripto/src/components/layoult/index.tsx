import { Header } from "../header"
import {Outlet} from 'react-router-dom'

export function Layoult(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}