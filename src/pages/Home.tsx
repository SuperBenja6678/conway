import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  const featuredProjects = [
    {
      title: 'Sandycove Dwelling LED Installation',
      location: 'Dublin',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    },
    {
      title: 'Longford Athletics Centre',
      location: 'Longford',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    },
    {
      title: 'Primary School Electrical Fit-out',
      location: 'Dublin',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg',
    },
  ];

  const highlights = [
    'Fully Licensed & Insured',
    'Emergency Call-outs Available',
    'Quality Guarantee',
    'Professional Service',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px]">
          <img
            src="/images/van.jpg"
            alt="Conway Electrical service van"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg drop-shadow-2xl">
                Conway Electrical Ltd
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-shadow drop-shadow-lg">
                Trusted Electrical Contractors in Cavan & Dublin
              </p>
              {/* Conway Stripes Accent */}
              <div className="flex justify-center mb-8 space-x-1">
                <div className="h-1 w-16 bg-blue shadow-lg"></div>
                <div className="h-1 w-16 bg-accent shadow-lg"></div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl group border-2 border-white/30"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Professional Electrical Services You Can Trust
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Serving residential, commercial, and industrial clients 
              across Cavan and Dublin, Conway Electrical Ltd delivers reliable, high-quality electrical 
              solutions that meet the highest safety standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-2 border-accent">
                  <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="font-semibold text-primary">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-700">
              Take a look at some of our recent successful electrical installations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                  <p className="text-gray-600 flex items-center">
                    <Star className="h-4 w-4 text-accent mr-1" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center text-primary hover:text-primary-light font-semibold group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us today for a free consultation and quote on your electrical project
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;