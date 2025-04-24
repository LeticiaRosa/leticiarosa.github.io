import { useState } from 'react';

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="relative z-50 p-2 md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`mb-1.5 h-0.5 w-6 bg-white transition-all ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></div>
        <div className={`mb-1.5 h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></div>
      </button>

      {/* Mobile menu */}
      <div className={`bg-purple fixed inset-0 z-40 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="flex h-full flex-col items-center justify-center">
          <a href="" className="button-link my-2 p-4 text-lg" onClick={toggleMenu}>
            HOME
          </a>
          <a href="" className="button-link my-2 p-4 text-lg" onClick={toggleMenu}>
            ABOUT
          </a>
          <a href="" className="button-link my-2 p-4 text-lg" onClick={toggleMenu}>
            PROJECTS
          </a>
          <a href="" className="button-link my-2 p-4 text-lg" onClick={toggleMenu}>
            SKILLS
          </a>
          <a href="" className="button-link my-2 p-4 text-lg" onClick={toggleMenu}>
            CONTACT
          </a>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden gap-4 md:flex">
        <a href="" className="button-link md:text-md lg:text-m py-2 text-xs lg:py-4">
          HOME
        </a>
        <a href="" className="button-link md:text-md lg:text-m py-2 text-xs lg:py-4">
          ABOUT
        </a>
        <a href="" className="button-link md:text-md lg:text-m py-2 text-xs lg:py-4">
          PROJECTS
        </a>
        <a href="" className="button-link md:text-md lg:text-m py-2 text-xs lg:py-4">
          SKILLS
        </a>
        <a href="" className="button-link md:text-md lg:text-m py-2 text-xs lg:py-4">
          CONTACT
        </a>
      </div>
    </div>
  );
}
