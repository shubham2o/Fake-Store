import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link, useParams } from "react-router-dom";

const Details = () => {
    const { products } = useContext(ProductContext);
    const { id } = useParams();

    return (
        <div className="w-full h-screen p-12">
            {products.map((item, index) => {
                return (
                    item.id == id
                        ?
                        <div
                            key={index}
                            className="w-[70%] h-[100%] mx-auto rounded-3xl p-[10%] bg-white text-black flex items-center gap-20"
                        >
                            <img
                                src={item.image}
                                className="w-[45%] h-[106%] object-contain"
                            />

                            <div className="tracking-tight">
                                <h1 className="text-3xl tracking-tighter">{item.title}</h1>

                                <h3 className="my-4 text-zinc-400">{item.category}</h3>

                                <h2 className="mb-4 text-green-600 font-bold tracking-wide">${item.price}</h2>

                                <p className="mb-[8%]">{item.description}</p>

                                <div className="h-9 text-white flex gap-7">
                                    <Link className="rounded-2xl px-6 py-1.5 bg-blue-600">
                                        Edit
                                    </Link>

                                    <Link className="rounded-2xl px-4 py-1.5 bg-red-600">
                                        Delete
                                    </Link>
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