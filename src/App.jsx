import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Company from "./pages/company/Company";
import Delivery from "./pages/delivery/Delivery";
import Return from "./pages/return/Return";
import Garant from "./pages/garant/Garant";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import ManageProduct from "./pages/admin/manage-product/ManageProduct";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/return" element={<Return />} />
          <Route path="/garant" element={<Garant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
        <Route path="/admin" element={<Admin/>}>
          <Route path="createproduct" element={<CreateProduct />} />
          <Route path="manageproduct" element={<ManageProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
