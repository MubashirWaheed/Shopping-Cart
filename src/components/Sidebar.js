import React , {useContext} from "react"
import '../styles/sidebar.css';
import { shopContext } from "./ShopContext";
function Sidebar(props){
    const products = useContext(shopContext);
    return (
        <div>
            <div className={props.className}>
                {
                    products.cart.map((item)=>{
                        return <p>{item.title}</p>
                    })
                }
                <h2>Sidebar Component</h2>     
            </div>
        </div>
    )
}
export default Sidebar