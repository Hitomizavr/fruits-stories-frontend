import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./components/pages/MainPage";
import CatalogPage from "./components/pages/CatalogPage";
import BlogPage from "./components/pages/BlogPage";
import PaymentPage from "./components/pages/PaymentPage";
import ContactPage from "./components/pages/ContactPage";

import "./css/styles.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/education" element={<CatalogPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
