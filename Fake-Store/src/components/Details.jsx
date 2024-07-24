import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link, useParams } from "react-router-dom";

const Details = () => {
    const { products } = useContext(ProductContext);
    const { id } = useParams();

    return (
        <div className="w-full h-screen mx-8 flex justify-center items-center flex-wrap text-black">
            {products.map((item, index) => {
                return (
                    item.id == id
                        ?
                        <div
                            key={index}
                            className="w-[80%] rounded-3xl py-10 bg-white flex justify-center items-center gap-12"
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
                                    <Link className="rounded-full px-6 py-1.5 bg-blue-600">
                                        Edit
                                    </Link>

                                    <Link className="rounded-full px-4 py-1.5 bg-red-600">
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