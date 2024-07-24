import { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const ProductContext = createContext();

const Context = (props) => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios
            .get("/products")
            .then(products => setProducts(products.data))
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context;