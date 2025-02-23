import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FallstreakCloud from './components/FallstreakCloud';
import AboutPage from './components/AboutPage';
import TechnologyProficiency from './components/TechProficiences';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FallstreakCloud />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tech" element={<TechnologyProficiency />} />
      </Routes>
    </Router>
  );
}

export default App;