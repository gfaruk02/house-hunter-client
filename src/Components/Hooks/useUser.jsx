import { useEffect, useState } from 'react';

const useUser = () => {
    const [users, setUsers] = useState([])
    console.log(users);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=> setUsers(data));
    },[])
    return users
};

export default useUser;