import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const { products, setProducts } = useContext(ProductContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        image: "",
        category: "",
        price: "",
        description: "",
    });

    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setProduct(products.filter(item => item.id == id)[0]);
    }, [id]);

    const addProductHandler = (event) => {
        event.preventDefault();

        if (
            product.title.trim().length < 5 ||
            product.image.trim().length < 5 ||
            product.category.trim().length < 5 ||
            product.price.trim().length < 1 ||
            product.description.trim().length < 5
        ) {
            alert(`Please make sure to complete all fields. Thank you!`);
            return;
        }

        const pi = products.findIndex(p => p.id == id);
        const copyData = [...products];

        copyData[pi] = { ...products[pi], ...product };

        setProducts(copyData);
        localStorage.setItem("products", JSON.stringify(copyData));
        navigate(-1);
    }

    return (
        <form
            action=""
            className="w-screen h-screen p-[3.5%] text-lg flex flex-col items-center gap-1"
            onSubmit={addProductHandler}
        >
            <h1 className="w-1/2 mb-10 underline underline-offset-8 text-2xl text-center text-yellow-400">
                Edit Product
            </h1>

            <input
                type="url"
                placeholder="Image Link"
                className="w-1/2 mb-6 rounded-lg px-3.5 py-2 text-black bg-zinc-100 outline-none"
                name="image"
                onChange={changeHandler}
                value={product && product.image}
            />

            <input
                type="text"
                placeholder="Title"
                className="w-1/2 mb-6 rounded-lg px-3.5 py-2 text-black bg-zinc-100 outline-none"
                name="title"
                onChange={changeHandler}
                value={product && product.title}
            />

            <div className="w-1/2 mb-6 flex justify-between flex-wrap">
                <input
                    type="text"
                    placeholder="Category"
                    className="w-[58%] rounded-lg px-3.5 py-2 text-black bg-zinc-100 outline-none"
                    name="category"
                    onChange={changeHandler}
                    value={product && product.category}
                />

                <input
                    type="number"
                    min={1}
                    placeholder="Price"
                    className="w-[36%] rounded-lg px-3.5 py-2 text-black bg-zinc-100 outline-none"
                    name="price"
                    onChange={changeHandler}
                    value={product && product.price}
                />
            </div>

            <textarea
                placeholder="Description"
                className="w-1/2 h-40 mb-10 rounded-lg px-3.5 py-2 text-black bg-zinc-100 outline-none"
                name="description"
                onChange={changeHandler}
                value={product && product.description}
            />

            <div className="w-1/2 text-right">
                <button
                    className="border-2 border-green-600 rounded-lg px-3.5 py-0.5 text-green-500 hover:bg-green-600 hover:border-green-600 hover:text-white"
                >
                    Edit Product
                </button>
            </div>
        </form>
    )
}

export default Edit;