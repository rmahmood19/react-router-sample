import {useEffect, useState} from "react";
import {Link, NavLink, Outlet, useParams} from "react-router-dom";

export const HostVanDetail = () => {


    const [currentVan, setCurrentVan] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    return (
        <>
            <div>
                <Link to='..'
                      relative={"path"}
                >Back to all vans</Link>
                {currentVan && (
                    <div>
                        <p>{currentVan.name}</p>

                        <div className="flex justify-center p-4">
                            <img className='w-48 rounded-lg' src={currentVan.imageUrl} alt='van'/>
                            <div className="p-8">
                                <i className='text-2xl'>{currentVan.type}</i>
                                <h3>{currentVan.name}</h3>
                                <h4>${currentVan.price}/day</h4>
                            </div>
                        </div>
                        <ul className='flex justify-center gap-4'>
                            <NavLink className={({ isActive }) => isActive ? 'font-bold' : null} to='.' end>Details</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'font-bold' : null} to='pricing'>Pricing</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'font-bold' : null} to='photos'>Photos</NavLink>
                        </ul>
                        <Outlet context={{currentVan}}/>
                    </div>

                )
                }
            </div>
        </>
    )
}