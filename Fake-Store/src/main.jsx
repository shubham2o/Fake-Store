import ReactDOM from 'react-dom/client';
import Context from './utils/Context.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);