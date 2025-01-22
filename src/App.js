import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Layout from "./components/Layout"
import AddProduct from './components/Product/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/add-product" element={<AddProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
