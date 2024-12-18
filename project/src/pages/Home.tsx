import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Book, Users, Award, Building, ArrowRight } from 'lucide-react';
import FloatingCallButton from '../components/FloatingCallButton';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import "./styles.css";
import './EnrollNowButton.css';


// test


export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'AutoCAD',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdCxk9_g9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9/viewform?usp=pp_url&entry.1=${formData.name}&entry.2=${formData.phone}&entry.3=${formData.email}&entry.4=${formData.course}`;
    window.open(formUrl, '_blank');
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const projects = [
    {
      title: 'Modern Residential Complex',
      image: '/src/images/project1.png',
      category: 'Residential'
    },
    {
      title: 'Commercial Plaza Design',
      image: '/src/images/project2.png',
      category: 'Commercial'
    },
    {
      title: 'Sustainable Urban Planning',
      image: '/src/images/project3.png',
      category: 'Urban Planning'
    },
    {
      title: 'Eco-Friendly Architecture',
      image: '/src/images/project4.png',
      category: 'Sustainable'
    }
  ];

  return (
    <div className="pt-16" id="hero">
      {/* Hero Section */}
      <div className="relative">
        <Slider {...sliderSettings}>
          {[
            {
              image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
              title: "Transform Your Career in Architecture",
              subtitle: "Join our comprehensive training program"
            },
            {
              image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
              title: "Master Modern Design Tools",
              subtitle: "Learn from industry experts"
            },
            {
              image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
              title: "Build Your Future",
              subtitle: "Hands-on experience with latest technology"
            }
          ].map((slide, index) => (
            <div key={index} className="relative">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.subtitle}</p>
                <button
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center"
                >
                  Know More <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Title */}
      <div className="text-center py-16 bg-gray-50">
        {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">
          INTEGRATED SKILL PROGRAM FOR ARCHITECTS & CIVIL ENGINEERS
        </h1> */}
       <h1
      className="text-4xl font-bold text-gray-800 mb-4"
      style={{ fontFamily: 'Antica, serif' }}
    >
      INTEGRATED <br />
      SKILL PROGRAM 
      FOR ARCHITECTS &<br />
      CIVIL ENGINEERS
    </h1>


      </div>

      {/* About Section */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start space-x-8">
            <Building className="w-12 h-12 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-6">About I-SPACE</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I-SPACE is a premier training centre dedicated to transforming architecture
                and civil engineering graduates into industry-ready professionals. Our
                intensive 3-month practical skill program combines the best of knowledge
                with hands-on experience, giving you the practical skills, confidence, and
                connections you need to excel in today's competitive professional field.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* About Section */}
{/* About Section */}
{/* About Section */}
<div className="py-24 relative bg-gradient-to-r from-indigo-700 to-purple-800 overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 right-0 z-0 transform scale-125 -translate-y-1/3 opacity-50">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" d="M0,256L1440,128L1440,0L0,0Z"></path>
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
    <div className="flex flex-col md:flex-row items-center md:space-x-8 bg-transparent p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105">
      {/* Icon with Animation */}
      <Building className="w-16 h-16 text-white bg-gradient-to-r from-teal-400 to-green-500 p-4 rounded-full shadow-2xl animate-bounce hover:animate-spin mb-6 md:mb-0" />
      <div className="space-y-6 md:space-y-8">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 text-shadow-xl animate-popIn inline-flex items-center">
  About 
  <img 
    src="https://raw.githubusercontent.com/realabrar1/ispacemysuru.com/refs/heads/main/src/images/Pi7_4fc28d4a-8111-4487-9589-b640d54dd63b-removebg-preview%20(1).png" 
    alt="I-SPACE logo" 
    className="inline-block w-32 h-auto ml-4 md:w-40 lg:w-48 xl:w-56"
  />
</h2>





        <p className="text-lg md:text-xl text-white leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 max-w-full md:max-w-2xl mb-8 tracking-wide">
          I-SPACE is a premier training centre dedicated to transforming architecture
          and civil engineering graduates into industry-ready professionals. Our
          intensive 3-month practical skill program combines the best of knowledge
          with hands-on experience, giving you the practical skills, confidence, and
          connections you need to excel in today's competitive professional field.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Primary Button */}
          <a href="#" className="inline-block bg-gradient-to-r from-teal-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg sm:text-xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:from-teal-700 hover:to-green-800">
            Learn More
          </a>
          {/* Secondary Button */}
         
        </div>
      </div>
    </div>
  </div>

  {/* Background Glowing Effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-800 opacity-40 blur-3xl"></div>
</div>

<style jsx>{`
  @keyframes popIn {
    0% { transform: scale(0.7); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .animate-popIn {
    animation: popIn 1s ease-out;
  }
`}</style>





        






      {/* Courses Section */}
      <div id="courses" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
        {/* enroll now button */}
      <div className="enroll-button-container">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSelSA3aaZOj2Y754SDqvR6oUy7LUoRdYDdeuZJZVXTMmB1udA/viewform?usp=sf_link" className="enroll-button">
        Enroll Now
      </a>
    </div>
      </div>

      
      
      {/* pichart */}
    <div class="containers">
      
        <div class="central-circle">I-SPACE</div>

        <div class="circle internship">INTERNSHIP</div>
        <div class="circle softwares">SOFTWARES</div>
        <div class="circle experts">EXPERTS PRESENTATIONS</div>
        <div class="circle visits">FIELD VISITS</div>
        <div class="circle certification">CERTIFICATION</div>
        <div class="circle assistance">JOB ASSISTANCE</div>


    </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of I-SPACE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Certification</h3>
              <p className="text-gray-600">
                Receive an industry-recognized certificate upon completion, boosting your credentials
                and job prospects.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Job Placement Assistance</h3>
              <p className="text-gray-600">
                Get placed in firms of architects, engineers, builders, and more. Start your own
                venture and become an entrepreneur.
              </p>
            </div>
            <div className="text-center">
              <Book className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Professional Confidence</h3>
              <p className="text-gray-600">
                Enter the job market as a well-rounded, confident professional ready to tackle
                any challenge.
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* Contact Form Section */}
        <div id="contact" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                  Select Course
                </label>
                <select
                  id="course"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option value="AutoCAD">AutoCAD / ZW</option>
                  <option value="SketchUp">SketchUp</option>
                  <option value="Photoshop">Photoshop</option>
                  <option value="Revit">Revit</option>
                  <option value="Lumion">Lumion</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-2 border-gray-200 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="bg-white px-4 relative z-10">Our Projects</span>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-lg border-2 border-gray-100 shadow-md transition-all duration-300 hover:border-blue-200"
                >
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-200 object-cover transition-transform duration-300 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 opacity-0  duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-white font-semibold px-4 transform translate-y-4  duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-2 px-4 transform translate-y-4  duration-300">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
       
       
       */}
      {/* test */}
<div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="border-2 border-gray-200 rounded-xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-12 relative">
        <span className="bg-white px-4 relative z-10">Our Projects</span>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="relative group overflow-hidden rounded-lg border-2 border-gray-100 shadow-md transition-all duration-300 hover:border-blue-200">
          <img src="/src/images/project1.png" alt="Modern Residential Complex" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white font-semibold px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Modern Residential Complex</h3>
              <p className="text-white/80 text-sm mt-2 px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Residential</p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative group overflow-hidden rounded-lg border-2 border-gray-100 shadow-md transition-all duration-300 hover:border-blue-200">
          <img src="/src/images/project2.png" alt="Commercial Plaza Design" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white font-semibold px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Commercial Plaza Design</h3>
              <p className="text-white/80 text-sm mt-2 px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Commercial</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</div>



      



      {/* Projects Section */}


      
        {/* Partners Section */}
    {/* Partners Section */}
<div className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 relative">
      <span className="bg-gray-50 px-4 relative z-10">Our Partners</span>
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>
    </h2>

    <div className="relative overflow-hidden">
      <div className="flex animate-scroll space-x-8">
        {/* First set of partners */}
        <div className="flex space-x-8 min-w-full">
          <div className="w-48 h-24 flex items-center justify-center">
            <img src="https://www.uni-mysore.ac.in/assets/galleries/emblem.png" alt="Partner 1" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-48 h-24 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png" alt="Partner 2" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-48 h-24 flex items-center justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8480T32sJquCXHfi0swaxix3sv3I5mHgKQ&s" alt="Partner 3" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-48 h-24 flex items-center justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbKpQ2adknFTNFSQjePYZeXJ7hHYUtxFvzg&s" alt="Partner 4" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-48 h-24 flex items-center justify-center">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-05/17/full/1715955573-6597.jpg?im=FeatureCrop,size=(826,465)" alt="Partner 5" className="max-h-full max-w-full object-contain" />
          </div>
        </div>

        {/* Duplicate set for seamless scrolling */}
        <div className="flex space-x-8 min-w-full">
          <div className="w-48 h-24 flex items-center justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnGwxXQhmSxR-J9fgbW4-_NtXcZx0gJT0_Q&s" alt="Partner 1" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-48 h-24 flex items-center justify-center">
            <img src="https://www.uni-mysore.ac.in/assets/galleries/emblem.png" alt="Partner 2" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-48 h-24 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png" alt="Partner 3" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-48 h-24 flex items-center justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8480T32sJquCXHfi0swaxix3sv3I5mHgKQ&s" alt="Partner 4" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-48 h-24 flex items-center justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnGwxXQhmSxR-J9fgbW4-_NtXcZx0gJT0_Q&s" alt="Partner 5" className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style jsx>{`
  .animate-scroll {
    animation: scrollLeft 20s linear infinite;
  }

  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`}</style>

 {/* Map Section */}
 <div className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d76.51871641640625!3d12.311827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709825338040!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <FloatingCallButton />
    </div>
  );
}