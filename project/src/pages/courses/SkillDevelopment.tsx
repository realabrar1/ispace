import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SkillDevelopment() {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Skill Development Training</h1>
          
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" 
            alt="Skill Development" 
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Course Duration</h2>
              <p className="text-gray-600">
                • 3 weeks intensive training<br />
                • 90 hours total<br />
                • Flexible batch timings
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
              <p className="text-gray-600">
                • Basic computer skills<br />
                • Understanding of 3D space<br />
                • No prior 3D modeling experience needed
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Course Fee</h2>
              <p className="text-gray-600">
                • ₹12,000 for complete course<br />
                • Installment options available<br />
                • Student discounts
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Week 1-2: Fundamentals</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Interface and navigation</li>
                  <li>Basic modeling tools</li>
                  <li>Component creation</li>
                  <li>Material application</li>
                  <li>Scene setup</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Week 3: Advanced</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Advanced modeling techniques</li>
                  <li>Rendering basics</li>
                  <li>Layout and presentation</li>
                  <li>Extensions and plugins</li>
                  <li>Final project</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Career Prospects</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>3D Visualization Artist</li>
              <li>Interior Designer</li>
              <li>Architectural Visualizer</li>
              <li>Product Designer</li>
              <li>Freelance 3D Modeler</li>
            </ul>
          </div>

          <div className="flex justify-center">
          <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSelSA3aaZOj2Y754SDqvR6oUy7LUoRdYDdeuZJZVXTMmB1udA/viewform?usp=sf_link"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
>
  Enroll Now
</a>

          </div>
        </div>
      </div>
    </div>
  );
}