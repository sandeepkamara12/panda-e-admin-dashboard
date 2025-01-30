import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
import AddProduct from './components/products/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Dashboard />}></Route> */}
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="add-product" element={<AddProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
