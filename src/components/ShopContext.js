import React, { createContext, useState } from "react";
export const shopContext = createContext();

function ShopContext(props){
    const [products, setProducts]  = useState([]);
    const [cart, setCart]  = useState([])
    return(
        <shopContext.Provider value={{products, setProducts, cart, setCart}}>
            {props.children}
        </shopContext.Provider>
    )
}
export default ShopContext;