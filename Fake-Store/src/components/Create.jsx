import { useState } from "react";

const Create = () => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form
            action=""
            className="w-screen h-screen p-[3.5%] text-lg flex flex-col items-center gap-1"
            onSubmit={handleSubmit}
        >
            <h1 className="w-1/2 mb-10 underline underline-offset-8 text-2xl text-center text-yellow-400">
                Add New Product
            </h1>

            <input
                type="url"
                placeholder="Image Link"
                className="w-1/2 mb-6 rounded-lg px-3.5 py-2 text-black bg-zinc-100"
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />

            <input
                type="text"
                placeholder="Title"
                className="w-1/2 mb-6 rounded-lg px-3.5 py-2 text-black bg-zinc-100"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <div className="w-1/2 mb-6 flex justify-between flex-wrap">
                <input
                    type="text"
                    placeholder="Category"
                    className="w-[58%] rounded-lg px-3.5 py-2 text-black bg-zinc-100"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                />

                <input
                    type="number"
                    min={1}
                    placeholder="Price"
                    className="w-[36%] rounded-lg px-3.5 py-2 text-black bg-zinc-100"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </div>

            <textarea
                placeholder="Description"
                className="w-1/2 h-32 mb-6 rounded-lg px-3.5 py-2 text-black bg-zinc-100"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
        </form>
    )
}

export default Create;