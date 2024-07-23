import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div className="w-full h-screen flex">
            <Sidebar />

            <div className="w-[85%] h-full p-10 pt-[5.6%] flex flex-wrap justify-center items-center gap-10 overflow-auto">
                <Link
                    to="/details/1"
                    className="w-[20%] h-[40vh] border rounded-xl p-3 bg-white text-black flex flex-col justify-center items-center gap-4"
                >
                    <div
                        className="w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110"
                        style={{
                            backgroundImage: 'url("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")',
                        }}
                    >
                    </div>

                    <h1 className="w-full text-center font-semibold hover:text-blue-600">
                        Lorem Ipsum acc ffffb fd
                    </h1>
                </Link>
            </div>
        </div>
    )
}

export default Home;