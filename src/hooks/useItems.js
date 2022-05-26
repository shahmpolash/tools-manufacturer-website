import { useEffect, useState } from "react";

const useItems = () =>{
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch('https://whispering-oasis-90698.herokuapp.com/item')
        .then(res=>res.json())
        .then(data=>setItems(data));
    }, []);

    return [items, setItems]

}

export default useItems;