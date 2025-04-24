import { useState } from 'react';

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        className="md:hidden p-4 z-50 relative" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-purple z-40 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <a href="" className="p-4 button-link text-lg my-2" onClick={toggleMenu}>HOME</a>
          <a href="" className="p-4 button-link text-lg my-2" onClick={toggleMenu}>ABOUT</a>
          <a href="" className="p-4 button-link text-lg my-2" onClick={toggleMenu}>PROJECTS</a>
          <a href="" className="p-4 button-link text-lg my-2" onClick={toggleMenu}>SKILLS</a>
          <a href="" className="p-4 button-link text-lg my-2" onClick={toggleMenu}>CONTACT</a>
        </div>
      </div>
      
      {/* Desktop menu */}
      <div className="hidden md:flex">
        <a href="" className="p-2 button-link text-xs md:text-md lg:text-m lg:p-4">HOME</a>
        <a href="" className="p-2 button-link text-xs md:text-md lg:text-m lg:p-4">ABOUT</a>
        <a href="" className="p-2 button-link text-xs md:text-md lg:text-m lg:p-4">PROJECTS</a>
        <a href="" className="p-2 button-link text-xs md:text-md lg:text-m lg:p-4">SKILLS</a>
        <a href="" className="p-2 button-link text-xs md:text-md lg:text-m lg:p-4">CONTACT</a>
      </div>
    </div>
  );
}