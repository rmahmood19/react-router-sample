import {Link, NavLink} from "react-router-dom";
import React from "react";

export const Navbar = () => {
    const activeClasses = 'text-white px-4 py-2 bg-purple-800'
    const inactiveClasses = 'text-purple-900 px-4 py-2 '
    return (
        <>
            <header className='flex justify-between gap-2'>
                <div>
                    <Link className='font-extrabold text-2xl' to='/'>#VANLIFE</Link>
                </div>
                <div className='flex gap-4 justify-center'>
                    <NavLink
                        className={({isActive}) => isActive ? activeClasses : inactiveClasses }
                        to='/host'
                    end>Host</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? activeClasses : inactiveClasses }
                        to='/about'>About</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? activeClasses : inactiveClasses }
                        to='/van'>Vans</NavLink>

                </div>

            </header>

        </>
    )
}