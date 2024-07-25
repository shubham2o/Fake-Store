import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { products } = useContext(ProductContext);
    let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
    distinct_category = [...new Set(distinct_category)];

    const color = () => {
        return `rgb(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()})`;
    }

    return (
        <nav className="w-[18.5%] h-full pt-24 bg-zinc-700 flex flex-col items-center">
            <a
                href="/create"
                className="border-2 border-blue-400 rounded-xl px-6 py-3 text-blue-400 text-lg font-semibold tracking-wider"
            >
                Add New product
            </a>

            <hr className="w-[80%] my-4" />

            <h1 className="w-[80%] mb-2 text-2xl font-semibold">Category Filter</h1>

            <div className="w-[78%]">
                {distinct_category.map((item, index) => {
                    return (
                        <Link
                            to={`/?category=${item}`}
                            key={index}
                            className="rounded-full px-3.5 py-1 flex items-center gap-3 hover:bg-white hover:text-black hover:font-bold hover:delay-100"
                        >
                            <span
                                style={{ backgroundColor: color() }}
                                className="w-[10px] h-[10px] mb-0.5 rounded-full"
                            >
                            </span>
                            {item}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Sidebar;