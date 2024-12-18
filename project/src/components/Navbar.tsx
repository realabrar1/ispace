import { Link } from 'react-router-dom';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/realabrar1/ispacemysuru/refs/heads/main/ispace_logo.png" 
                alt="iSpace Logo" 
                className="h-8 w-auto sm:h-12"
              />
            </Link>
          </div>
          
          {/* <div className="flex items-center space-x-3 sm:space-x-8 text-sm sm:text-base">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
            >
              Home
            </Link> */}
<div className="flex items-center space-x-3 sm:space-x-8 text-sm sm:text-base">
  <Link 
    to="#hero" 
    onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
    className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
  >
    Home
  </Link>
          <button 
              onClick={() => scrollToSection('courses')} 
              className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
            >
              Courses
            </button>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
            >
              Team
            </Link>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}