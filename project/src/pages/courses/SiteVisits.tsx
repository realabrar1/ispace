import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SiteVisits() {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Site Visits </h1>
          
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
            alt="Site Visits" 
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Course Duration</h2>
              <p className="text-gray-600">
                • 6 weeks comprehensive training<br />
                • 180 hours total<br />
                • Weekend batches available
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
              <p className="text-gray-600">
                • Basic architectural knowledge<br />
                • Understanding of building systems<br />
                • Basic computer proficiency
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Course Fee</h2>
              <p className="text-gray-600">
                • ₹25,000 for complete course<br />
                • EMI options available<br />
                • Group discounts
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Weeks 1-3: BIM Basics</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>BIM concepts and workflow</li>
                  <li>Interface and navigation</li>
                  <li>Building elements modeling</li>
                  <li>Family creation basics</li>
                  <li>Documentation setup</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Weeks 4-6: Advanced BIM</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Advanced family creation</li>
                  <li>MEP systems integration</li>
                  <li>Construction documentation</li>
                  <li>Collaboration tools</li>
                  <li>Real project implementation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Industry Applications</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>BIM Coordinator</li>
              <li>Revit Modeler</li>
              <li>BIM Manager</li>
              <li>Digital Construction Specialist</li>
              <li>Architectural Technology Consultant</li>
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