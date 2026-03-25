// App root
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Neige from "./pages/Neige";
import Contact from "./pages/Contact";
import Stihl from "./pages/Stihl";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from './components/ScrollToTop'
import PageReveal from './components/PageReveal'

function App() {
  return (
    <LanguageProvider>
      <>
        <PageReveal />
        <ScrollToTop />
        <Navbar />
        <div className="app-content">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/ineige" element={<Neige />} />
              <Route path="/stihl" element={<Stihl />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </>
    </LanguageProvider>
  );
}

export default App;
