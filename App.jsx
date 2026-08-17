import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Championship from "./pages/Championship";
import Qualifier from "./pages/Qualifier";
import Clubs from "./pages/Clubs";
import Players from "./pages/Players";
import Hotels from "./pages/Hotels";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return <>
      <ScrollToTop/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/championship" element={<Championship />} />
      <Route path="/qualifier" element={<Qualifier />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/players" element={<Players />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </>;
}
