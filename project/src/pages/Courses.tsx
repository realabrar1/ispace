import { ChevronRight } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'Expert Mentorship',
      image: 'https://www.interfolio.com/wp-content/uploads/Blog_MentoringStudentsGuide-scaled.jpg',
      description: 'Master industry-standard CAD software for precise technical drawings and 2D/3D design.',
      // duration: '4 weeks',
      features: [
        'Basic to advanced drafting techniques',
        '2D and 3D modeling',
        'Project-based learning',
        'Industry-standard practices'
      ]
    },
    {
      title: 'Site Visits',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQGV8vrlTrRkjg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696392850444?e=2147483647&v=beta&t=V5IN5EXY49w6zTOAJ3Zra0pUMIemr2KH5jVWb-WOiJ4',
      description: 'Learn 3D modeling and visualization for architectural designs.',
      // duration: '3 weeks',
      features: [
        '3D modeling fundamentals',
        'Material and texture application',
        'Scene composition',
        'Rendering basics'
      ]
    },
    {
      title: 'Skill Development',
      image: 'https://media.licdn.com/dms/image/D4D12AQESl3jZeTIlUQ/article-cover_image-shrink_600_2000/0/1684252269650?e=2147483647&v=beta&t=QF9BSjqnKeKu8lPmd_ytDB5VQn-_NgM6XY-nsDv0czw',
      description: 'Build essential skills in project planning, safety protocols, construction methods, and resource management',
      // duration: '2 weeks',
      features: [
        'Image editing techniques',
        'Architectural post-processing',
        'Presentation graphics',
        'Digital art creation'
      ]
    },
    {
      title: 'Hands-On Training',
      image: 'https://www.oxfordedu.ca/wp-content/uploads/2021/04/April-22-Train-for-a-career.jpg',
      description: 'Master design software, automation, and AI in construction using market-driven tools and CAD rendering techniques.',
      // duration: '6 weeks',
      features: [
        'BIM fundamentals',
        'Family creation',
        'Documentation',
        'Collaboration tools'
      ]
    },
    {
      title: 'Professional Training',
      image: 'https://www.keg.com/hubfs/Professional%20Training%20Images/104.png',
      description: 'Create photorealistic 3D renderings and animations.',
      // duration: '3 weeks',
      features: [
        'Real-time rendering',
        'Material creation',
        'Animation basics',
        'Scene composition'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-blue-600 font-semibold mb-4">Duration: {course.duration}</p>
                
                <h3 className="font-semibold mb-2">What you'll learn:</h3>
                <ul className="list-disc list-inside mb-6 text-gray-600">
                  {course.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Enroll now <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}