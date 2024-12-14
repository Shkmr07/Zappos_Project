import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SearchSidebar from "@/components/SearchSidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ProductsPage from "./components/ProductsPage";

function App() {

  const location = useLocation()
  const hideNavbarFooter = location.pathname === '/login'

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {!hideNavbarFooter && <SearchSidebar />}
      {!hideNavbarFooter && <Sidebar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productPage/:string" element={<ProductsPage />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
