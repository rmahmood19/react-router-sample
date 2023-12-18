import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const HostVans = () => {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/host/vans')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.vans)
                setVans(data.vans)
            })
    }, []);
    return (
        <>
            <div className='flex gap-4 pt-4'>
                {
                    vans && vans.map((van) => {
                        return (
                            <Link to={van.id}>
                                <div key={van.id} className='border border-gray-500 rounded-lg p-2 w-[300px]'>
                                    <img className='rounded-full max-w-[100px]' src={van.imageUrl} alt={van.name}/>
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