import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All our work complies with the highest safety standards and Irish electrical regulations.',
    },
    {
      icon: Award,
      title: 'Quality Workmanship',
      description: 'We take pride in delivering exceptional quality that stands the test of time.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We work closely with clients to exceed expectations.',
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'On-time delivery and dependable service you can count on, every single time.',
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">About Conway Electrical Ltd</h1>
          {/* Conway Stripes */}
          <div className="flex justify-center mb-6 space-x-1">
            <div className="h-1 w-16 bg-blue"></div>
            <div className="h-1 w-16 bg-accent"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your trusted electrical partner serving 
            Cavan and Dublin with professional, reliable electrical services.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/cw.jpg"
              alt="Conway Electrical work in progress"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded with a commitment to excellence, Conway Electrical Ltd has been serving the 
              electrical needs of residential, commercial, and industrial clients. 
              Based in Cavan and operating throughout Dublin, we have built our reputation on 
              delivering reliable, high-quality electrical solutions.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of fully qualified electricians brings decades of combined experience to 
              every project, from simple residential wiring to complex industrial installations. 
              We understand that electrical work requires not just technical expertise, but also 
              trust, reliability, and attention to safety.
            </p>
            <p className="text-gray-700">
              Whether you're a homeowner looking to upgrade your electrical system, a business 
              owner planning a commercial fit-out, or an industrial client requiring specialized 
              electrical services, Conway Electrical Ltd has the experience and expertise to 
              deliver results that exceed your expectations.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 border-accent">
                  <value.icon className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default About;