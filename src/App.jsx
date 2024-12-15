import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SearchSidebar from "@/components/SearchSidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "@/components/Homepage";
import Contact from "@/components/Contact";
import Login from "@/components/Login";
import ProductsPage from "@/components/ProductsPage";
import ProductDetail from "@/components/ProductDetail";
import PaymentSuccess from "@/components/PaymentSuccess";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  const location = useLocation()
  const hideNavbarFooter = location.pathname === '/login'

  return (
    <>
      <ScrollToTop />
      {!hideNavbarFooter && <Navbar />}
      {!hideNavbarFooter && <SearchSidebar />}
      {!hideNavbarFooter && <Sidebar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productPage/:string" element={<ProductsPage />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
