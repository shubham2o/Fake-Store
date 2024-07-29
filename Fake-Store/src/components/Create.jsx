import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const { products, setProducts } = useContext(ProductContext);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const addProductHandler = (event) => {
        event.preventDefault();

        if (
            title.trim().length < 5 ||
            image.trim().length < 5 ||
            category.trim().length < 5 ||
            price.trim().length < 1 ||
            description.trim().length < 5
        ) {
            alert(`Please make sure to complete all fields. Thank you!`);
            return;
        }

        const product = {
            id: nanoid(),
            title,
            image,
            category,
            price,
            description,
        }

        setProducts([...products, product]);
        localStorage.setItem("products", JSON.stringify([...products, product]));
        navigate("/");
    }

    return (
        <form
            action=""
            className="w-screen h-screen p-[3.5%] text-lg flex flex-col items-center gap-1"
            onSubmit={addProductHandler}
        >
            <h1 className="w-1/2 mb-10 underline underline-offset-8 text-2xl text-center text-yellow-400">
                Add New Product
            </h1>

            <input
                type="url"
                placeholder="Image Link"
                className="w-1/2 mb-6 rounded-lg px-3.5 py-2 text-black bg-zinc-100 outline-none"
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />

            <input
                type="text"
                placeholder="Title"
                className="w-1/2 mb-6 rounded-lg px-3.5 py-2 text-black bg-zinc-100 outline-none"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <div className="w-1/2 mb-6 flex justify-between flex-wrap">
                <input
                    type="text"
                    placeholder="Category"
                    className="w-[58%] rounded-lg px-3.5 py-2 text-black bg-zinc-100 outline-none"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                />

                <input
                    type="number"
                    min={1}
                    placeholder="Price"
                    className="w-[36%] rounded-lg px-3.5 py-2 text-black bg-zinc-100 outline-none"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </div>

            <textarea
                placeholder="Description"
                className="w-1/2 h-40 mb-10 rounded-lg px-3.5 py-2 text-black bg-zinc-100 outline-none"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <div className="w-1/2 text-right">
                <button
                    className="border-2 border-green-600 rounded-lg px-3.5 py-0.5 text-green-500 hover:bg-green-600 hover:border-green-600 hover:text-white"
                // onClick={}
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default Create;