import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LessonsProvider } from './context/LessonsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Units from './pages/Units';
import Lessons from './pages/Lessons';
import LessonPlayer from './pages/LessonPlayer';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <LessonsProvider>
      <Router>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/units" element={<Units />} />
            <Route path="/units/:unitId" element={<Lessons />} />
            <Route path="/units/:unitId/lessons/:lessonId" element={<LessonPlayer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LessonsProvider>
  );
}

export default App;