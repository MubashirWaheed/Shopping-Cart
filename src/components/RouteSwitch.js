import React from "react";
import { BrowserRouter, Route , Routes, Switch} from "react-router-dom";
import App from "../App";
import Shop from "./Shop";

function RouteSwitch(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />   
                <Route path="/shop" element={<Shop />} />
           </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;