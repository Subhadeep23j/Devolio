import { useState, useEffect } from 'react';

const Hero = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });
  const [scrolled, setScrolled] = useState(false);
  
  // Animation for the floating React logo
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        let newX = prev.x + direction.x * 0.5;
        let newY = prev.y + direction.y * 0.5;
        let newDirectionX = direction.x;
        let newDirectionY = direction.y;
        
        // Bounce off the edges
        if (newX >= 85 || newX <= 15) {
          newDirectionX *= -1;
        }
        if (newY >= 85 || newY <= 15) {
          newDirectionY *= -1;
        }
        
        setDirection({ x: newDirectionX, y: newDirectionY });
        return { x: newX, y: newY };
      });
    }, 50);
    
    // Handle scroll effect
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [direction, scrolled]);

  // Background particles
  const particles = Array(20).fill().map((_, index) => ({
    id: index,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1
  }));

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-700 to-blue-400">
      {/* Background particles */}
      {particles.map(particle => (
        <div 
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity
          }}
        />
      ))}
      
      {/* Background mesh grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>
      
      {/* Floating React Logo */}
      <div 
        className="absolute w-24 h-24 opacity-20 md:w-32 md:h-32"
        style={{ 
          left: `${position.x}%`, 
          top: `${position.y}%`, 
          transform: 'translate(-50%, -50%)' 
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <g fill="#61DAFB">
            <circle cx="50" cy="50" r="10" />
            <path d="M50,30c13.8,0,25,9,25,20s-11.2,20-25,20s-25-9-25-20S36.2,30,50,30z" 
                  fill="none" stroke="#61DAFB" strokeWidth="3" />
            <path d="M30,50c0-13.8,9-25,20-25s20,11.2,20,25s-9,25-20,25S30,63.8,30,50z" 
                  fill="none" stroke="#61DAFB" strokeWidth="3" />
          </g>
        </svg>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-pink-500 to-purple-700 opacity-20 blur-xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-400 to-teal-300 opacity-20 blur-xl -ml-20 -mb-20"></div>
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
        <div className="max-w-4xl">
          {/* Badge / Tag */}
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-purple-900 bg-white bg-opacity-30 backdrop-blur-sm rounded-full shadow-lg">
            <span className="inline-block w-2 h-2 mr-2 bg-green-400 rounded-full"></span>
            React + Tailwind CSS Framework
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold text-white md:text-6xl lg:text-7xl">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Amazing</span> React Applications
          </h1>
          
          <p className="mb-8 text-xl text-white md:text-2xl">
            Create modern, responsive UIs with the power of React and the simplicity of Tailwind CSS.
            <span className="block mt-2 text-lg text-white text-opacity-80">Perfect for startups, SaaS products, and enterprise applications.</span>
          </p>
          
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
            <button className="px-8 py-4 font-semibold text-purple-900 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 group cursor-pointer">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            {/* <button className="px-8 py-4 font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-purple-900 hover:bg-opacity-90 transition duration-300">
              Watch Demo
            </button> */}
          </div>
          
          {/* Social proof */}
          <div className="mt-12">
            <p className="mb-3 text-sm font-medium text-white text-opacity-80">TRUSTED BY DEVELOPERS NAMES</p>
            <div className="flex flex-wrap justify-center gap-6 mt-2">
              <div className="text-white text-opacity-50 hover:text-opacity-100 transition">Pritam</div>
              <div className="text-white text-opacity-50 hover:text-opacity-100 transition">Nayan</div>
              <div className="text-white text-opacity-50 hover:text-opacity-100 transition">Sujay</div>
              <div className="text-white text-opacity-50 hover:text-opacity-100 transition">Subhadip</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* Custom style for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;