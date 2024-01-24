import { useEffect, useState } from "react";


const useHouses = () => {
    const [houser, setHouser] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/houses')
        .then(res=>res.json())
        .then(data=> setHouser(data));
    },[])
    return houser
};

export default useHouses;