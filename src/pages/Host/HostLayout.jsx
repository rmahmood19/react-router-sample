import {Link, NavLink, Outlet} from "react-router-dom";

export const HostLayout = () => {
    const inactiveStyles = 'text-2xl border-b-2 border-purple-900 px-4 py-2'
    const activeStyles = 'text-2xl border-4 rounded border-purple-900 px-4 py-2'
    return (
        <>
            <div className='flex gap-x-4 justify-center'>
                <NavLink
                    className={({isActive}) => isActive ? activeStyles : inactiveStyles}
                    to='.'
                    end
                >Dashboard</NavLink>
                <NavLink
                    className={({isActive}) => isActive ? activeStyles : inactiveStyles}
                    to='income' >Income</NavLink>
                <NavLink
                    className={({isActive}) => isActive ? activeStyles : inactiveStyles}
                    to='reviews' >Reviews</NavLink>
                <NavLink
                    className={({isActive}) => isActive ? activeStyles : inactiveStyles}
                    to='vans'
                >Host Vans</NavLink>
            </div>
            <Outlet />
        </>
    )
}