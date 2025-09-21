export function Navigation() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-black hover:text-gray-600 transition-colors"
          >
            JB
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-base text-gray-700 hover:text-black transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-base text-gray-700 hover:text-black transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-base text-gray-700 hover:text-black transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-base text-gray-700 hover:text-black transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}