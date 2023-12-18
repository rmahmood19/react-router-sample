import {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";

export const VanDetail = () => {

    const params = useParams()

    const [van, setVan] = useState({})

    const location = useLocation()

    console.log(location)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setVan(data.vans)
            })
    }, []);
    return (
        <>
            <Link to='..'
                  relative={"path"}
            >Back to all vans</Link>
            <img className='rounded-full max-w-[280px]' src={van.imageUrl} alt={van.name}/>
            <div className='flex justify-around'>
                <p className='text-2xl'>{van.name}</p>
                <p>{van.price}</p>
            </div>
            <div>{van.description}</div>

        </>
    )
}