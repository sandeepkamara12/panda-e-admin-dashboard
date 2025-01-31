import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
import AddProduct from './components/products/AddProduct';
import UserList from './components/user/UserList';

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
          <Route path="users" element={<UserList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
