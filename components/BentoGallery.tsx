import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BentoGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: string[];
}

export function BentoGallery({ isOpen, onClose, projectTitle, images }: BentoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isOpen) return null;

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Create a bento-style layout pattern
  const getBentoItemClasses = (index: number) => {
    const patterns = [
      "col-span-2 row-span-2", // Large item
      "col-span-1 row-span-1", // Regular item
      "col-span-1 row-span-2", // Tall item
      "col-span-2 row-span-1", // Wide item
      "col-span-1 row-span-1", // Regular item
      "col-span-1 row-span-1", // Regular item
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-7xl max-h-[95vh] bg-white rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{projectTitle}</h2>
            <p className="text-gray-600 mt-1">
              {images.length} Images
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Bento Gallery Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[250px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  // Responsive bento patterns - simpler on mobile, more complex on larger screens
                  index % 6 === 0 && images.length > 3 ? 'col-span-1 sm:col-span-2 row-span-1 sm:row-span-2' :
                  index % 6 === 2 && images.length > 5 ? 'col-span-1 row-span-1 sm:row-span-2' :
                  index % 6 === 3 && images.length > 6 ? 'col-span-1 sm:col-span-2 row-span-1' :
                  'col-span-1 row-span-1'
                }`}
                onClick={() => openImageModal(image)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${projectTitle} image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-size Image Modal */}
      {selectedImage && (
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/95"
            onClick={closeImageModal}
          />
          
          <div className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <img 
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
