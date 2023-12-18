import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {Navbar} from "../../components/NavBar.jsx";

export const VanList = () => {

    const [vans, setVans] = useState([])

    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter  = searchParams.get('type');

    console.log(typeFilter);

    useEffect(() => {
        fetch('api/vans')
            .then((res) => res.json())
            .then((data) => {
                setVans(data.vans)
            })
    }, []);

    const genNewSearchParamString = (key, value) => {
        const sp = new URLSearchParams(searchParams)
        if (!value) {
            sp.delete(key)
        } else {
            sp.set(key, value)
        }
        return `?${sp.toString()}`
    }

    const filteredVans = typeFilter ?  vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans

    return (
        <>
            <div>
                <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
                <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
                <Link to={genNewSearchParamString("type", null)}>Clear</Link>
            </div>
            <div className='flex gap-4 justify-center'>
                <button onClick={() => setSearchParams({type: 'rugged'})}
                        className='bg-purple-300 hover:bg-purple-400 px-2 py-1 rounded-lg'>Rugged</button>
                <button
                    onClick={() => setSearchParams({type: 'simple'})}
                    className='bg-purple-300 hover:bg-purple-400 px-2 py-1 rounded-lg'>Simple</button>
                <button
                    onClick={() => setSearchParams({type: 'luxury'})}
                    className='bg-purple-300 hover:bg-purple-400 px-2 py-1 rounded-lg'>Luxury</button>

            </div>
            {
                typeFilter  && (
                    <div onClick={() => setSearchParams({})}>Clear</div>
                )
            }
            <div className='flex flex-wrap gap-4 justify-center '>
            {
                vans &&
                    filteredVans.map((van) => {
                    return (
                            <Link to={van.id}
                            state={{search: searchParams.toString()}}>
                                <div key={van.id} className='border border-gray-500 rounded-lg p-2 w-[300px]'>
                                    <img className='rounded-lg max-w-[280px]' src={van.imageUrl} alt={van.name}/>
                                    <div className='flex justify-around'>
                                        <p className='text-2xl'>{van.name}</p>
                                        <p>{van.price}</p>
                                    </div>
                                    <div>
                                        <div className='bg-purple-900 text-white px-2 py-4 rounded-lg'>{van.type}</div>
                                    </div>
                                </div>
                            </Link>

                        )

                })
            }
            </div>

        </>
    )
}