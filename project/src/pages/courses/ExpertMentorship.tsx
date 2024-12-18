import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExpertMentorship() {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Expert Mentorship Program</h1>
          
          <img 
            src="https://images.unsplash.com/photo-1545670723-196ed0954986" 
            alt="Expert Mentorship" 
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Course Duration</h2>
              <p className="text-gray-600">
                •  intensive training<br />
                • 120 hours total<br />
                • Flexible timing options
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
              <p className="text-gray-600">
                • Basic computer knowledge<br />
                • Understanding of architectural drawings<br />
                • No prior CAD experience required
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Course Fee</h2>
              <p className="text-gray-600">
                • ₹15,000 for complete course<br />
                • EMI options available<br />
                • Early bird discounts
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Week 1-2: Basics</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Interface and workspace setup</li>
                  <li>Drawing tools and commands</li>
                  <li>2D drafting fundamentals</li>
                  <li>Layers and properties</li>
                  <li>Basic editing commands</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Week 3-4: Advanced</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>3D modeling techniques</li>
                  <li>Advanced editing tools</li>
                  <li>Layouts and plotting</li>
                  <li>Custom blocks and attributes</li>
                  <li>Project work</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>CAD Draftsman</li>
              <li>Architectural Designer</li>
              <li>BIM Modeler</li>
              <li>Construction Documentation Specialist</li>
              <li>Freelance CAD Designer</li>
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