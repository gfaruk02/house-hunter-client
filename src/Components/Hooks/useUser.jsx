import { useEffect, useState } from 'react';

const useUser = () => {
    const [users, setUsers] = useState([])
    console.log(users);
    useEffect(()=>{
        fetch('https://house-hunter-server-rho-nine.vercel.app/user')
        .then(res=>res.json())
        .then(data=> setUsers(data));
    },[])
    return users
};

export default useUser;