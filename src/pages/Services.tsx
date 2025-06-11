import React from 'react';
import { Home, Building, Factory, Lightbulb, Shield, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Wiring',
      description: 'Complete home electrical installations, rewiring, and upgrades for modern living.',
      features: ['New home wiring', 'Electrical panel upgrades', 'Outlet & switch installation', 'Home automation'],
    },
    {
      icon: Building,
      title: 'Commercial Fit-outs',
      description: 'Professional electrical solutions for offices, retail spaces, and commercial buildings.',
      features: ['Office electrical design', 'Retail lighting systems', 'Power distribution', 'Emergency lighting'],
    },
    {
      icon: Lightbulb,
      title: 'LED Lighting Installations',
      description: 'Energy-efficient LED lighting solutions for all types of properties.',
      features: ['LED retrofits', 'Smart lighting controls', 'Outdoor lighting', 'Energy savings analysis'],
    },
    {
      icon: Shield,
      title: 'Electrical Safety Inspections',
      description: 'Comprehensive electrical safety testing and certification services.',
      features: ['Safety certifications', 'Electrical testing', 'Compliance reports', 'Periodic inspections'],
    },
    {
      icon: Factory,
      title: 'Industrial Containment',
      description: 'Specialized electrical containment and panel work for industrial facilities.',
      features: ['Cable management', 'Control panels', 'Industrial wiring', 'Maintenance services'],
    },
    {
      icon: Wrench,
      title: 'Electrical Maintenance',
      description: 'Ongoing maintenance and repair services to keep your electrical systems running smoothly.',
      features: ['Preventive maintenance', 'Emergency repairs', 'System upgrades', 'Troubleshooting'],
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Electrical Services</h1>
          {/* Conway Stripes */}
          <div className="flex justify-center mb-6 space-x-1">
            <div className="h-1 w-16 bg-blue"></div>
            <div className="h-1 w-16 bg-accent"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive electrical solutions for residential, commercial, and industrial clients 
            throughout Cavan and Dublin.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group">
              <div className="flex items-center mb-4">
                <div className="bg-accent/10 p-3 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your requirements and assess your project needs.' },
              { step: '02', title: 'Planning', desc: 'Detailed planning and design to ensure optimal electrical solutions.' },
              { step: '03', title: 'Installation', desc: 'Professional installation by our qualified electricians.' },
              { step: '04', title: 'Testing', desc: 'Comprehensive testing and certification to ensure safety compliance.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-primary rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Need Electrical Services?</h2>
          <p className="text-lg mb-6">
            Contact us today for a free consultation and quote on your electrical project.
          </p>
          <a
            href="tel:+353868181436"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Call +353 86 818 1436
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;