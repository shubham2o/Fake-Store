import { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const ProductContext = createContext();

const Context = (props) => {
    // const [products, setProducts] = useState([]);

    // const getProducts = () => {
    //     axios
    //         .get("/products")
    //         .then(products => setProducts(products.data))
    //         .catch(err => console.log(err.message))
    // }

    // useEffect(() => {
    //     getProducts();
    // }, []);

    const [products, setProducts] =
        useState(JSON.parse(localStorage.getItem('products')) || []);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context;