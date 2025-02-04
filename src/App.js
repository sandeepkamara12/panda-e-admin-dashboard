import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
import AddProduct from './components/products/AddProduct';
import UserList from './components/user/UserList';
import AddCategory from './components/products/AddCategory';
import Categories from './pages/Categories';

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
          <Route path="add-category" element={<AddCategory classes="p-4 sm:p-6" />}></Route>
          <Route path="categories" element={<Categories classes="p-4 sm:p-6" />}></Route>
          <Route path="users" element={<UserList classes="p-4 sm:p-6" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
