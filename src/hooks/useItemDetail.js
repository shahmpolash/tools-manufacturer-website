import { useEffect, useState } from "react";

const useItemDetail = itemId =>{
    const [item, setItem] = useState({});

    useEffect( () =>{
        const url =`https://whispering-oasis-90698.herokuapp.com/item/${itemId}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))

    },[itemId])
    return [item]
}
export default useItemDetail;