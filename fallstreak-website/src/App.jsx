import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FallstreakCloud from './components/FallstreakCloud';
import AboutPage from './components/AboutPage';
import TechnologyProficiency from './components/TechProficiences';
import ContactPage from './components/ContactPage';
import Services from './components/Services';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FallstreakCloud />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tech" element={<TechnologyProficiency />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;