import {Outlet} from "react-router-dom";

export const Dashboard = () => {
    return (
        <>
            <p> This is host page</p>
            <Outlet />

        </>
    )
}