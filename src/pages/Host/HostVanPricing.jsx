import {useOutletContext} from "react-router-dom";

export const HostVanPricing = () => {
    const {currentVan} = useOutletContext();
    return (
        <>
            {currentVan.price}

        </>
    )
}