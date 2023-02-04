import { Route, Routes } from "react-router-dom";
import Cart from "../Components/Cart";
// import ProductsTable from "../Components/ProductsTable";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import SingleProductPage from "./SingleProductPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default AllRoutes;
