import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ExpertMentorship from './pages/courses/ExpertMentorship';
import HandsOnTraining from './pages/courses/HandsOnTraining';
import ProfessionalTraining from './pages/courses/ProfessionalTraining';
import SiteVisits from './pages/courses/SiteVisits';
import SkillDevelopment from './pages/courses/SkillDevelopment';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses/ExpertMentorship" element={<ExpertMentorship />} />
            <Route path="/courses/HandsOnTraining" element={<HandsOnTraining />} />
            <Route path="/courses/ProfessionalTraining" element={<ProfessionalTraining />} />
            <Route path="/courses/SiteVisits" element={<SiteVisits />} />
            <Route path="/courses/SkillDevelopment" element={<SkillDevelopment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}