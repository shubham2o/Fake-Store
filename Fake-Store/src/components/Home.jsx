import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';

const Home = () => {
    const { products } = useContext(ProductContext);

    return (
        <div className="w-full h-screen flex">
            <Sidebar />

            {products.length > 0
                ?
                <div className="w-[85%] p-12 pt-[5.5%] flex flex-wrap gap-3 overflow-x-hidden overflow-y-auto">
                    {products.map((item, index) => {
                        return (
                            <Link
                                to={`/details/${item.id}`}
                                key={index}
                                className="w-[24%] h-[35vh] border rounded-lg p-3 bg-white text-black flex flex-col justify-center items-center"
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                    className="w-full h-[100%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-110"
                                >
                                </div>

                                <h1 className="hover:text-blue-600 tracking-tighter leading-tight text-sm flex justify-center items-center">
                                    {item.title}
                                </h1>
                            </Link>
                        )
                    })}
                </div>
                :
                <Loading />
            }
        </div>
    )
}

export default Home;