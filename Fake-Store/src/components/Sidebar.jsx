const Sidebar = () => {
    return (
        <nav className="w-[15%] h-full pt-6 bg-zinc-700 flex flex-col items-center">
            <a
                href="/create"
                className="border-2 border-blue-400 rounded-lg px-3 py-1.5 text-blue-400 font-bold tracking-wide"
            >
                Add New product
            </a>

            <hr className="w-[80%] my-4" />

            <h1 className="w-[80%] mb-3 text-xl font-semibold">
                Category Filter
            </h1>

            <ul className="w-[80%] text-sm tracking-wide">
                <li className="mb-3 flex items-center gap-2.5">
                    <span className="w-[9px] h-[9px] mb-0.5 rounded-full bg-red-500"></span>
                    Category 1
                </li>

                <li className="mb-3 flex items-center gap-2.5">
                    <span className="w-[9px] h-[9px] mb-0.5 rounded-full bg-yellow-500"></span>
                    Category 2
                </li>

                <li className="mb-3 flex items-center gap-2.5">
                    <span className="w-[9px] h-[9px] mb-0.5 rounded-full bg-green-500"></span>
                    Category 3
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;