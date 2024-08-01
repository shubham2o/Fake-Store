import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useParams } from "react-router-dom";

const Details = () => {
    const { products, setProducts } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!product) {
            setProduct(products.filter(p => p.id == id)[0]);
        }
    }, []);

    const productDeleteHandler = (id) => {
        const filteredProducts = products.filter(p => p.id !== id);
        setProducts(filteredProducts);
        localStorage.setItem("products", JSON.stringify(filteredProducts));
    }

    return (
        <div className="w-full h-screen mx-8 flex justify-center items-center flex-wrap text-black">
            {products.map((item, index) => {
                return (
                    item.id == id
                        ?
                        <div
                            key={index}
                            className="w-[75%] rounded-3xl py-10 bg-white flex justify-center items-center gap-12"
                        >
                            <div className="w-[40%]">
                                <img
                                    src={item.image}
                                    className="w-full h-72 object-contain"
                                />
                            </div>

                            <div className="h-[100%] w-[50%] tracking-tight">
                                <h1 className="text-3xl">{item.title}</h1>

                                <h3 className="mt-2 mb-4 text-zinc-500">{item.category}</h3>

                                <h2 className="mb-4 text-green-600 font-semibold">${item.price}</h2>

                                <p className="mb-6">{item.description}</p>

                                <div className="text-white flex gap-7">
                                    <button
                                        className="rounded-lg px-5 py-1.5 bg-blue-600"
                                    // onClick={}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="rounded-lg px-3 py-1.5 bg-red-600"
                                        onClick={() => productDeleteHandler(products.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        null
                )
            })}
        </div>
    )
}

export default Details;