import {useOutletContext} from "react-router-dom";

export const HostVanInfo = () => {
    const {currentVan} = useOutletContext();
    return (
        <>
            {currentVan.description}

        </>
    )
}