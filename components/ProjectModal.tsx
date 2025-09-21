import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BentoGallery } from './BentoGallery';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[]; // Optional array for detailed images
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  projects: Project[];
}

export function ProjectModal({ isOpen, onClose, category, projects }: ProjectModalProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [bentoGalleryOpen, setBentoGalleryOpen] = useState(false);

  if (!isOpen) return null;

  const openProjectDetail = (project: Project) => {
    // If project has multiple images, show BentoGallery, otherwise show simple detail modal
    if (project.images && project.images.length > 1) {
      setSelectedProject(project);
      setBentoGalleryOpen(true);
    } else {
      setSelectedProject(project);
    }
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    setBentoGalleryOpen(false);
  };

  const closeBentoGallery = () => {
    setBentoGalleryOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[90vh] mx-4 sm:mx-0 bg-white rounded-xl sm:rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{category}</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              {projects.length} Project{projects.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => openProjectDetail(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    {project.images && project.images.length > 1 && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {project.images.length} images
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90"
            onClick={closeProjectDetail}
          />
          
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col">
            {/* Detail Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                {selectedProject.title}
              </h3>
              <button
                onClick={closeProjectDetail}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Detail Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="aspect-[16/10] bg-gray-100">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BentoGallery for projects with multiple images */}
      {bentoGalleryOpen && selectedProject && selectedProject.images && (
        <BentoGallery
          isOpen={bentoGalleryOpen}
          onClose={closeBentoGallery}
          projectTitle={selectedProject.title}
          images={selectedProject.images}
        />
      )}
    </div>
  );
}
