import  React  from "react";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import App from "../App";
import Shop from "./Shop";
import Navabar from "./Navbar";
import ShopContext from "./ShopContext";

function RouteSwitch(){

    return(
        <ShopContext>
            <BrowserRouter>
                <Navabar />
                <Routes>
                    <Route path="/" element={<App />} />   
                    <Route path="shop" element={<Shop />} />
                    <Route path="*" element={
                        <main>
                            <p>Error 404!! this route is not available</p>
                        </main>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ShopContext>
    )
}
export default RouteSwitch;