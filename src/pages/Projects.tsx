import React from 'react';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sandycove Dwelling LED Installation',
      location: 'Sandycove, Dublin',
      year: '2024',
      category: 'Residential',
      description: 'Complete LED lighting retrofit for modern seaside dwelling, including smart lighting controls and energy-efficient solutions.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      features: ['LED Retrofit', 'Smart Controls', 'Energy Efficiency'],
    },
    {
      title: 'Longford Athletics Centre',
      location: 'Longford',
      year: '2023',
      category: 'Sports Facility',
      description: 'Comprehensive electrical installation for athletics facility including high-performance lighting and power distribution.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      features: ['Sports Lighting', 'Power Distribution', 'Emergency Systems'],
    },
    {
      title: 'Primary School Electrical Fit-out',
      location: 'Dublin',
      year: '2023',
      category: 'Educational',
      description: 'Modern electrical installation for primary school including classroom technology integration and safety systems.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg',
      features: ['Classroom Technology', 'Safety Systems', 'Energy Management'],
    },
    {
      title: 'Cavan Civil Defence HQ',
      location: 'Cavan',
      year: '2022',
      category: 'Government',
      description: 'Specialized electrical installation for emergency services headquarters with backup power and communication systems.',
      image: 'https://images.pexels.com/photos/8731658/pexels-photo-8731658.jpeg',
      features: ['Emergency Power', 'Communication Systems', 'Security Integration'],
    },
    {
      title: 'Retail Store Chain Fit-out',
      location: 'Dublin',
      year: '2022',
      category: 'Commercial',
      description: 'Multiple retail locations electrical installation with modern LED lighting and point-of-sale power solutions.',
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg',
      features: ['Retail Lighting', 'POS Systems', 'Display Lighting'],
    },
    {
      title: 'Industrial Facility Upgrade',
      location: 'Cavan',
      year: '2021',
      category: 'Industrial',
      description: 'Complete electrical system upgrade for manufacturing facility including new panel installations and containment.',
      image: 'https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg',
      features: ['Panel Installation', 'Industrial Containment', 'System Upgrade'],
    },
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Educational', 'Sports Facility', 'Government'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Projects</h1>
          {/* Conway Stripes */}
          <div className="flex justify-center mb-6 space-x-1">
            <div className="h-1 w-16 bg-blue"></div>
            <div className="h-1 w-16 bg-accent"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our portfolio of successful electrical installations across Cavan and Dublin, 
            showcasing our expertise in residential, commercial, and industrial projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{project.year}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Projects;