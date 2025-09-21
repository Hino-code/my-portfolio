import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";

const webDesignProjects = [
  {
    id: 1,
    title: "Modern UI Dashboard",
    description:
      "Clean interface design for analytics platform with real-time data visualization and user-friendly navigation.",
    image:
      "https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXB8ZW58MXx8fHwxNzU4NDM0MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Responsive online shopping experience with intuitive product browsing and streamlined checkout process.",
    image:
      "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODM1NTAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Corporate Website",
    description:
      "Professional business website with modern design principles and optimized user experience.",
    image:
      "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1ODQzNDA4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description:
      "Interactive dashboard for data visualization with custom charts and reporting features.",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NTg0MzQwODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

// Graphic Design Projects - including college organizational work
const graphicDesignProjects = [
  {
    // College Organizational Projects (Graphic Design Work)
    id: 9,
    title: "LINKCODE ID Design",
    description:
      "Official identification card design for LINKCODE DIS Student Council featuring professional layout, university branding, and student information display.",
    image:
      "/Portfolio College Organazational Projects/LINKCODE ID/Desktop - 2.png",
    images: [
      "/Portfolio College Organazational Projects/LINKCODE ID/Desktop - 2.png",
      "/Portfolio College Organazational Projects/LINKCODE ID/4.png",
      "/Portfolio College Organazational Projects/LINKCODE ID/3.png",
      "/Portfolio College Organazational Projects/LINKCODE ID/1.png",
    ],
  },
  {
    id: 10,
    title: "LINKCODE Lanyard Design",
    description:
      "Modern lanyard design with LINKCODE branding available in blue and white variants for student identification and events.",
    image:
      "/Portfolio College Organazational Projects/LINKCODE LANYARD/LC LANYARD BLUE.png",
    images: [
      "/Portfolio College Organazational Projects/LINKCODE LANYARD/LC LANYARD BLUE.png",
      "/Portfolio College Organazational Projects/LINKCODE LANYARD/LC LANYARD WHITE.png",
      "/Portfolio College Organazational Projects/LINKCODE LANYARD/3.png",
    ],
  },
  {
    id: 11,
    title: "MSU-SpecOr Project",
    description:
      "Special organizational project materials for MSU featuring professional design elements and institutional branding.",
    image: "/Portfolio College Organazational Projects/MSU-SpecOr./1.png",
    images: [
      "/Portfolio College Organazational Projects/MSU-SpecOr./1.png",
      "/Portfolio College Organazational Projects/MSU-SpecOr./2.png",
    ],
  },
  {
    id: 12,
    title: "MS & MR Main Backdrop",
    description:
      "Event backdrop design for MS & MR pageant featuring elegant design elements and proper event branding for college events.",
    image:
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/5.png",
    images: [
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/5.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/6.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/7.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/8.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/9.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/10.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/11.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/12.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/13.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/14.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/15.png",
      "/Portfolio College Organazational Projects/ms & mr Main Backdrop/16.png",
    ],
  },
];

const categories = [
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Modern web applications and user interfaces designed for optimal user experience.",
    image: webDesignProjects[0].image,
    projects: webDesignProjects,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Visual design work including branding, print materials, college organizational projects, and digital design assets.",
    image: graphicDesignProjects[0].image,
    projects: graphicDesignProjects,
  },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCategory(null);
  };

  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="mb-12 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight text-gray-800 font-light">
          Creative Work
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
          A collection of recent projects showcasing design solutions across web
          development and visual design.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => openModal(category.id)}
            className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                  {category.projects.length} Project
                  {category.projects.length !== 1 ? "s" : ""}
                </span>
                <div className="w-2 h-2 bg-gray-300 rounded-full hidden sm:block" />
                <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                  Click to View
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                {category.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {category.description}
              </p>

              <div className="mt-4 inline-flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                View Gallery →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {modalOpen && selectedCategoryData && (
        <ProjectModal
          isOpen={modalOpen}
          onClose={closeModal}
          category={selectedCategoryData.title}
          projects={selectedCategoryData.projects}
        />
      )}
    </section>
  );
}
