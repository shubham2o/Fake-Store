import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Details from './components/Details';

const App = () => {
  const { search, pathname } = useLocation();

  return (
    <div className="w-full h-screen flex">
      <div className="absolute w-[18.5%] my-[3.25rem] tracking-wide font-semibold flex justify-center items-center">
        {pathname != "/" || search.length > 0
          ?
          <Link
            to="/"
            className="border-2 border-red-600 rounded-lg px-2 py-1 text-red-500 hover:bg-red-600 hover:text-white"
          >
            Home
          </Link>
          :
          <div className="rounded-lg px-2.5 py-1.5 bg-green-700 font-normal">
            || Fake Store ||
          </div>
        }
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App;