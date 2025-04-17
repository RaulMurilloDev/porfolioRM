import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowDown, Code, Palette, Globe, Cpu, Camera, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      category: "Web Development"
    },
    {
      title: "Mobile Banking App",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      category: "UI/UX Design"
    },
    {
      title: "AI Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      category: "Data Visualization"
    },
    {
      title: "Smart Home System",
      image: "https://images.unsplash.com/photo-1558002038-bb4237b50b11?auto=format&fit=crop&q=80",
      category: "IoT Development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-1" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6 animate-fade-in">Raul Murillo</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Creative Developer & Designer</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github className="w-7 h-7" />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-7 h-7" />
            </a>
            <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors transform hover:scale-110">
              <Camera className="w-7 h-7" />
            </Link>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8 text-blue-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Why Choose Us</h2>
          <ul className="space-y-6 max-w-3xl mx-auto">
            {[
              "Good prices for the product delivered.",
              "Fast delivery, great quality",
              "All specs on demand or lead by my team, you choose!",
              "Integration with all kind of functions from the beginning"
            ].map((feature, index) => (
              <li key={index} className="flex items-start space-x-4 text-white">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">What I Do</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Code />, title: "Web Development", desc: "Creating responsive and dynamic web applications" },
              { icon: <Palette />, title: "UI/UX Design", desc: "Crafting beautiful and intuitive interfaces" },
              { icon: <Globe />, title: "Digital Marketing", desc: "Driving growth through digital strategies" },
              { icon: <Cpu />, title: "Tech Consulting", desc: "Providing expert technical guidance" }
            ].map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">Basic Page</h3>
              <div className="text-3xl font-bold text-blue-400 mb-6">$1,500</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Single page with multiple sections</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Contact form</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Map integration</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Social platform links</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>SSL, Domain, 1-year Hosting</span>
                </li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Complex Design */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/50 transform scale-105 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Complex Design</h3>
              <div className="text-3xl font-bold text-blue-400 mb-6">Custom Quote</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Up to 5 pages</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Home page</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>About Us page</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Products gallery</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Reviews section</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>FAQs page</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all">
                Contact Us
              </button>
            </div>

            {/* PWA Service */}
            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">PWA Service</h3>
              <div className="text-3xl font-bold text-blue-400 mb-6">$15k - $45k</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Full PWA functionality</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>API Integration</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>CRUD Operations</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Case study included</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Microservices architecture</span>
                </li>
              </ul>
              <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-medium hover:bg-purple-600 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div 
              className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"
            />
            <div 
              className="relative rounded-lg overflow-hidden transform transition duration-300 group-hover:scale-105"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px'
              }}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate developer and designer with over 5 years of experience creating beautiful, functional websites and applications. I specialize in creating user-centric experiences that drive results.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                <h3 className="font-bold text-white mb-2">Web Development</h3>
                <p className="text-gray-300">Modern, responsive websites built with the latest technologies.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                <h3 className="font-bold text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-300">Intuitive interfaces that provide exceptional user experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <div 
                  className="aspect-video bg-cover bg-center rounded-xl transform transition duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Get in Touch</h2>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-xl border border-white/20">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-300 font-medium mb-2">Service Description</label>
                <textarea
                  id="service"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-12 flex justify-center space-x-8">
            <a href="mailto:contact@example.com" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span>contact@example.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;