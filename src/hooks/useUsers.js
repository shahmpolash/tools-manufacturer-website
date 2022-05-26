import { useEffect, useState } from 'react';

const useUsers = () =>{
    const [users, setUsers] = useState({});

    useEffect( () =>{
      
        fetch('https://whispering-oasis-90698.herokuapp.com/user')
        .then(res=>res.json())
        .then(data=>setUsers(data))

    },[])
    return [users]
}

export default useUsers;