import { useEffect, useState } from "react";


const useHouses = () => {
    const [houser, setHouser] = useState([])
    useEffect(()=>{
        fetch('https://house-hunter-server-rho-nine.vercel.app/houses')
        .then(res=>res.json())
        .then(data=> setHouser(data));
    },[])
    return houser
};

export default useHouses;