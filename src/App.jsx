import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LessonsProvider } from './context/LessonsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Units from './pages/Units';
import Lessons from './pages/Lessons';
import LessonPlayer from './pages/LessonPlayer';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminLessons from './pages/AdminLessons';
import AdminUnits from './pages/AdminUnits';
import UnitForm from './pages/UnitForm';
import LessonForm from './pages/LessonForm';

function App() {
  return (
    <AuthProvider>
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
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/units" element={<AdminUnits />} />
            <Route path="/admin/units/new" element={<UnitForm />} />
            <Route path="/admin/lessons" element={<AdminLessons />} />
            <Route path="/admin/lessons/new" element={<LessonForm />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LessonsProvider>
    </AuthProvider>
  );
}

export default App;