import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
import Loading from "./components/loading/Loading";
import { ScrollTop } from "./components/scroll";
const Home = lazy(() => import("./pages/home/Home"));
const Company = lazy(() => import("./pages/company/Company"));
const Delivery = lazy(() => import("./pages/delivery/Delivery"));
const Return = lazy(() => import("./pages/return/Return"));
const Garant = lazy(() => import("./pages/garant/Garant"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const CreateProduct = lazy(() => import("./pages/admin/create-product/CreateProduct"));
const ManageProduct = lazy(() => import("./pages/admin/manage-product/ManageProduct"));
const ManageCategory = lazy(() => import("./pages/admin/manage-category/ManageCategory"));
const CreateCategory = lazy(() => import("./pages/admin/create-category/CreateCategory"));
const Admin = lazy(() => import("./pages/admin/Admin"));
const Login = lazy(() => import("./pages/login/Login"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const Detail = lazy(() => import("./pages/detail/Detail"));
const Products = lazy(() => import("./components/products/Products"));
const NotFound = lazy(() => import("./components/notfound/NotFound"));
const Category = lazy(() => import("./pages/category/Category"));

function App() {
  return (
    <Suspense fallback={<div><Loading/></div>}>
    <BrowserRouter>
    <ScrollTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/return" element={<Return />} />
          <Route path="/garant" element={<Garant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/all-products" element={<Products />} />
          <Route path="/single-product/:id" element={<Detail />} />
          <Route path="/catalog" element={<Category />} />
        </Route>
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="createproduct" element={<CreateProduct />} />
            <Route path="manageproduct" element={<ManageProduct />} />
            <Route path="createcategory" element={<ManageCategory />} />
            <Route path="managecategory" element={<CreateCategory />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
