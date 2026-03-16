import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="donate" element={<Donate />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<div style={{padding:'100px', textAlign:'center', minHeight:'60vh', marginTop:'100px'}}><h2>Page Not Found</h2><p>This page doesn't exist.</p></div>} />
      </Route>
    </Routes>
  );
}

export default App;
