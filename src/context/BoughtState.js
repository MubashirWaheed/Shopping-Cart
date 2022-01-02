import React, {useState, useReducer} from "react";
import { BoughtContext } from "./BoughtContext";
import {reducer} from './appReducer';

let initBought = {
    items: []
}


function BoughtState({children}){
    // const [bought, setBought] = useState();
    const [state, dispatch] = useReducer(reducer, initBought);
    const addItem = (item)=>{
        dispatch({
            type:'add',
            payload: item
        })
    }

    return(
        <BoughtContext.Provider value={{items: state.items, addItem}}> 
            {children}
        </BoughtContext.Provider>
    );
};

export default BoughtState;