const skills = [
  {
    category: "Backend & Database",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" }
    ]
  },
  {
    category: "Frontend & Frameworks", 
    items: [
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "💨" }
    ]
  },
  {
    category: "Tools & Version Control",
    items: [
      { name: "Git", icon: "🔧" },
      { name: "Google Cloud Platform", icon: "☁️" }
    ]
  },
  {
    category: "Design & Creative",
    items: [
      { name: "Figma", icon: "🎨" },
      { name: "Adobe Illustrator", icon: "🖌️" }
    ]
  }
];

export function Skills() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl mb-4 tracking-tight text-gray-800 font-light">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            A comprehensive toolkit for building modern web applications 
            from concept to deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-medium text-gray-700 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-6 py-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl text-gray-600">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}