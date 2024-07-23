import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
  return (
    <div className="w-full h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App;