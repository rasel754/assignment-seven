import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";

const Items = ({handelCookie}) => {
    const [items , setItems]=useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
     .then(res=>res.json())
     .then(data => setItems(data))
    },[])
    return (
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* <h1 className="text-5xl">items : {items.length}</h1> */}
            {
                items.map(item =><Item handelCookie={handelCookie} key={item.id} item={item}></Item>)
            }
        </div>
    );
};

export default Items;