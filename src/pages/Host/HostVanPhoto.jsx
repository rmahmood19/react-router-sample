import {useOutletContext} from "react-router-dom";

export const HostVanPhoto = () => {
    const {currentVan} = useOutletContext();
    return (
        <>
            <img className='w-48' src={currentVan.imageUrl} alt='van'/>

        </>
    )
}