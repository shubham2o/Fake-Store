import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';

const Home = () => {
    const { products } = useContext(ProductContext);
    const { search } = useLocation();
    const category = decodeURIComponent(search.split('=')[1]);
    const [filteredProducts, setFilteredProducts] = useState(null);

    useEffect(() => {
        if (!filteredProducts || category === "undefined") {
            setFilteredProducts(products);
        }
        if (category != "undefined") {
            setFilteredProducts(products.filter(p => p.category == category));
        }
    }, [category, products]);

    return (
        <div className="w-full h-screen flex">
            <Sidebar />

            {products.length > 0
                ?
                <div className="w-[81.5%] p-12 pt-[7%] flex flex-wrap gap-3 overflow-x-hidden overflow-y-auto">
                    {filteredProducts
                        ?
                        filteredProducts.map((item, index) => {
                            return (
                                <Link
                                    to={`/details/${item.id}`}
                                    key={index}
                                    className="w-[24%] h-[38vh] border rounded-lg p-3 bg-white text-center text-black flex flex-col justify-center items-center"
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                        }}
                                        className="w-full h-[100%] mb-3.5 bg-contain bg-no-repeat bg-center hover:scale-110 hover:delay-75"
                                    >
                                    </div>

                                    <h1 className="hover:text-blue-600 tracking-tighter leading-tight flex justify-center items-center">
                                        {item.title}
                                    </h1>
                                </Link>
                            )
                        })
                        :
                        <Loading />
                    }
                </div>
                :
                <Loading />
            }
        </div>
    )
}

export default Home;