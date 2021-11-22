import React , {useState, useEffect, useContext, createContext}from "react";
import shopCss from "../styles/shop.module.css";
import { shopContext } from "./ShopContext";

const WOMEN_URL = "https://fakestoreapi.com/products/category/women's%20clothing";
const MEN_URL = "https://fakestoreapi.com/products/category/men's%20clothing";

function Shop(){
    const products = useContext(shopContext);
    // const [products, setProducts] = useState([]);
    console.log(products.cart);
    let productsArray = []
    async function getProducts(MEN_URL, WOMEN_URL){
        const firstResp = await fetch(MEN_URL)
        const firstData = await firstResp.json()
        productsArray.push(...firstData);

        const resp =  await fetch(WOMEN_URL)
        const data = await resp.json()
        productsArray.push(...data);

        products.setProducts(productsArray);
    }
    const cartItem = (e)=>{
        
        products.setCart((previous)=>[...previous,{
            title:e.target.parentNode.childNodes[1].innerText,
            price:e.target.parentNode.childNodes[2].innerText
        }])
        // console.log(e.target.parentNode.childNodes[1].innerText);
    }
    
    useEffect(()=>{
        getProducts(MEN_URL, WOMEN_URL);
    },[])

    return(
        <div className={shopCss.component}>
            <div className={shopCss.container}>
                {
                    products.products.map((product)=>{
                        return (
                            <div className={shopCss.card} key={product.id}>
                                <img className={shopCss.productImg} src={product.image} alt="product" />
                                <h5>{product.title}</h5>
                                <p>{`$${product.price}`}</p>
                                <div className={shopCss.input}>
                                    <button>-</button>
                                    <input type="text"  value="1" disabled/>
                                    <button>+</button>
                                </div>
                                <button className={shopCss.addCartBtn} onClick={cartItem}>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Shop