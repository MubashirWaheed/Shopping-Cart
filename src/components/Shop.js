import React , {useState, useEffect, useContext}from "react";
import shopCss from "../styles/shop.module.css";
import { BoughtContext } from "../context/BoughtContext";

const WOMEN_URL = "https://fakestoreapi.com/products/category/women's%20clothing";
const MEN_URL = "https://fakestoreapi.com/products/category/men's%20clothing";

function Shop(){
    const [products, setProducts] = useState([]);
    const {items, addItem} = useContext(BoughtContext);
    
 

    useEffect(()=>{
            // Products fetched from server 
            Promise.all([
                fetch(MEN_URL)
                    .then(res => res.json())
                    .then(data => {return data}),
                fetch(WOMEN_URL)
                    .then(res => res.json())
                    .then(data => {return data}) 
            ]).then((data1)=>{
                const [man, woman] = data1
                setProducts([...man,...woman]);
            });
        },[]);

    return(
        <div className={shopCss.component}>
            <div className={shopCss.container}>

                {
                    products.map((product)=>{
                        return (
                            <div className={shopCss.card} key={product.id}>
                                <img className={shopCss.productImg} src={product.image} alt="product" />
                                <h5>{product.title}</h5>
                                <p>{`$${product.price}`}</p>
                                <div className={shopCss.input}>
                                    {/* <button>-</button> */}
                                    {/* <input type="text"  value="1" disabled /> */}
                                    {/* <button>+</button> */}
                                </div>
                                <button onClick={()=>{addItem(product)}}>Add Items</button>                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Shop