import React , {useState, useEffect}from "react";
import shopCss from "../styles/shop.module.css";

const WOMEN_URL = "https://fakestoreapi.com/products/category/women's%20clothing";
const MEN_URL = "https://fakestoreapi.com/products/category/men's%20clothing";

// getProducts(URL)
function Shop(){
    const [products, setProducts] = useState([]);
    let productsArray = []
    async function getProducts(MEN_URL, WOMEN_URL){
        const firstResp = await fetch(MEN_URL)
        const firstData = await firstResp.json()
        productsArray.push(...firstData);

        const resp =  await fetch(WOMEN_URL)
        const data = await resp.json()
        productsArray.push(...data);

        setProducts(productsArray);
    }
    
    useEffect(()=>{
        getProducts(MEN_URL, WOMEN_URL);
        console.log("Hello")
    },[])
    return(
        <div className={shopCss.component}>
            <div className={shopCss.container}>
                {
                    products.map((product)=>{
                        return (
                            <div className={shopCss.card}>
                                <img className={shopCss.productImg} src={product.image} alt="product" />
                                <h5>{product.title}</h5>
                                <p>{`$${product.price}`}</p>
                                <div className={shopCss.input}>
                                    <button>-</button>
                                    <input type="text"  value="1" disabled/>
                                    <button>+</button>
                                </div>
                                <button className={shopCss.addCartBtn}>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Shop