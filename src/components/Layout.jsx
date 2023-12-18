import {Outlet} from "react-router-dom";
import {Navbar} from "./NavBar.jsx";
import {Footer} from "./Footer.jsx";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>


        </>
    )
}