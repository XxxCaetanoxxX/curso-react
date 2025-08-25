import { Outlet } from "react-router-dom";
import { Header } from "../header";

export function Layoult() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}