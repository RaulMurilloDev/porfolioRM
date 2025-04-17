import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80",
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <Link 
        to="/" 
        className="fixed top-8 left-8 z-50 flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
        <span>Back to Home</span>
      </Link>
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Photo Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:z-10"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateZ(${index * -10}px) rotateX(${index % 2 ? 2 : -2}deg)`,
              }}
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg -m-2 transform -rotate-6 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Project {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;