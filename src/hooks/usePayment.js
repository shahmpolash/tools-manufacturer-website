import { useEffect, useState } from "react";

const usePayment = id =>{
    const [order, setOrder] = useState({});

    useEffect( () =>{
        const url =`http://localhost:5000/order/${id}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrder(data))

    },[id])
    return [order]
}
export default usePayment;