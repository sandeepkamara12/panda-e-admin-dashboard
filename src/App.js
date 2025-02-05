import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
import AddProduct from './components/products/AddProduct';
import UserList from './components/user/UserList';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import Variations from './pages/Variations';
import Invoices from './pages/Invoices';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Dashboard />}></Route> */}
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="users" element={<UserList classes="p-4 sm:p-6" />}></Route>
          <Route path="categories" element={<Categories classes="p-4 sm:p-6" />}></Route>
          <Route path="products" element={<AddProduct />}></Route>
          <Route path="orders" element={<Orders classes="p-4 sm:p-6" />}></Route>
          <Route path="variations" element={<Variations classes="p-4 sm:p-6" />}></Route>
          <Route path="invoices" element={<Invoices classes="p-4 sm:p-6" />}></Route>
          <Route path="messages" element={<Messages classes="p-4 sm:p-6" />}></Route>
          <Route path="settings" element={<Settings classes="p-4 sm:p-6" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
