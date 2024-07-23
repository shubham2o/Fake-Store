import { Link } from "react-router-dom";

const Details = () => {
    return (
        <div className="w-[70%] h-full m-auto p-[10%] bg-white text-black flex items-center gap-12">
            <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                className="w-[40%] h-[80%] object-contain"
            />

            <div className="w-[55%] content rounded-2xl p-5 flex flex-col gap-4">
                <h1 className="text-2xl underline underline-offset-4">
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </h1>

                <h3 className="text-zinc-400">
                    Men Clothing
                </h3>

                <h2 className="text-red-600 font-bold">
                    $109.95
                </h2>

                <p className="leading-snug tracking-tight">
                    Your perfect pack for everyday use and walks in the forest.
                    Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                </p>

                <Link className="">
                    Edit
                </Link>

                <Link className="">
                    Delete
                </Link>
            </div>
        </div>
    )
}

export default Details;