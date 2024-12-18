import { Users } from 'lucide-react';

export default function About() {
  const mentors = [
    {
      name: "Shubhashree H B",
      role: "B.Arch",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGk3TXMNECR-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728319050921?e=1738195200&v=beta&t=6vA65TxQm2za5KaxR0sd4MKNdgSPLaprySNinGDVq9s",
      description: `Architect.`
    },
    {
      name: "Girish S",
      role: "Senior Design Mentor",
      image: "https://raw.githubusercontent.com/realabrar1/ispacemysuru.com/refs/heads/main/src/images/Picture8.png",
      description: " Project Manager"
    },
    {
      name: "Suhas H C ",
      role: "B.E, Civil, IEI",
      image: "https://raw.githubusercontent.com/realabrar1/ispacemysuru.com/refs/heads/main/src/images/Picture7.png",
      description: "Project Engineer."
    },{
      name: "Shadakshari.H.M Archispace",
      role: " B.Arch",
      image: "https://raw.githubusercontent.com/realabrar1/ispacemysuru.com/refs/heads/main/src/images/Picture1.png",
      description: "Architec."
    },{
      name: "S B Basavaraja",
      role: " B.E., MTech, MISTE, MACCE, MIE",
      image: "https://raw.githubusercontent.com/realabrar1/ispacemysuru.com/refs/heads/main/src/images/Picture3.png",
      description: " Structural Engineer "
    },{
      name: "Shiv Manju",
      role: " B.C., MTech. ",
      image: "https://raw.githubusercontent.com/realabrar1/ispacemysuru.com/refs/heads/main/src/images/Picture4.png",
      description: "Structural Engineer."
    },{
      name: "Ravi Chokkalingam",
      role: " B.E Civil, MBA, PG (HR), Dipl., Concrete Tech",
      image: "https://raw.githubusercontent.com/realabrar1/ispacemysuru.com/refs/heads/main/src/images/Picture5.png",
      description: " Certified lead auditor (Dubai), Civil Engineer,Certified Manager of Quality (USA)."
    },{
      name: "Narasimha Prasad M K Design cell",
      role: "B.Arch, ",
      image: "https://raw.githubusercontent.com/realabrar1/ispacemysuru.com/refs/heads/main/src/images/Picture6.png",
      description: "PG DIpl in Construction  Management."
    },{
      name: "Rajesh Kumar Jain",
      role: "B.Arch., D.Civil ",
      image: "https://raw.githubusercontent.com/realabrar1/ispacemysuru.com/refs/heads/main/src/images/Picture11.png",
      description: "Rleef Architects & Consultants Architect"
    }
  ];

  return (
    <div className="bg-white">
      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About I-SPACE</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I-SPACE is a premier training centre dedicated to transforming architecture
            and civil engineering graduates into industry-ready professionals. Our
            intensive 3-month practical skill program combines the best of knowledge
            with hands-on experience, giving you the practical skills, confidence, and
            connections you need to excel in today's competitive professional field.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-16" id="team">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://raw.githubusercontent.com/realabrar1/ispacemysuru.com/refs/heads/main/src/images/founder1.png"
                alt="Ar. H E Chandrashekar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Ar. H E Chandrashekar</h2>
              <p className="text-gray-600 mb-4">
                Architect & Interior Designer<br />
                Bachelors in architecture, Malnad college of Engineering<br />
                Masters in Urban & Regional Planning (MURP), Mysore University
              </p>
              <p className="text-gray-600">
                Founder of Chandrashekar & Associates, Mysuru, brings over 38 years of
                expertise in architecture, specializing in innovative, cost-efficient
                solutions for residential, commercial, and public sector projects.
                In 2011, he established ArchiSpace, with a focus on sustainable design
                and urban planning.
              </p>
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
                <p className="text-gray-600 mb-2">{mentor.role}</p>
                <p className="text-gray-600">{mentor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}