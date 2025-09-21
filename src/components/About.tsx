export function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-gray-800 font-light">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                I'm a passionate developer who bridges the gap between design and technology. 
                With expertise spanning from database architecture to user interface design, 
                I create comprehensive digital solutions that are both functional and beautiful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                My journey combines technical proficiency in modern web technologies 
                with a keen eye for design, allowing me to deliver end-to-end solutions 
                that exceed expectations and create meaningful user experiences.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-800">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="text-gray-700">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="text-gray-700">UI/UX Design</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="text-gray-700">Database Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="text-gray-700">Cloud Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Development Philosophy</h4>
                <p className="text-gray-700">
                  Clean code, thoughtful design, and user-centered solutions drive every project I work on.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Design Approach</h4>
                <p className="text-gray-700">
                  I believe great design is invisible - it just works, feels natural, and delights users.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Technical Excellence</h4>
                <p className="text-gray-700">
                  Modern technologies, best practices, and scalable architecture form the foundation of my work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}