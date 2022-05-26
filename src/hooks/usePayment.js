import { useEffect, useState } from "react";

const usePayment = id =>{
    const [order, setOrder] = useState({});

    useEffect( () =>{
        const url =`https://whispering-oasis-90698.herokuapp.com/order/${id}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrder(data))

    },[id])
    return [order]
}
export default usePayment;