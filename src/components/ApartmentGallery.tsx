import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface ApartmentGalleryProps {
  images: GalleryImage[];
  onClose: () => void;
  title: string;
}

const ApartmentGallery: React.FC<ApartmentGalleryProps> = ({ images, onClose, title }) => {
  const [index, setIndex] = React.useState(-1);

  // Format images for PhotoAlbum
  const photos = images.map(img => ({
    src: img.src,
    width: img.width,
    height: img.height,
    alt: img.alt
  }));

  // Format images for Lightbox
  const slides = images.map(img => ({
    src: img.src,
    alt: img.alt
  }));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-xl font-bold">{title}</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-4">
            <PhotoAlbum
              layout="rows"
              photos={photos}
              onClick={({ index }) => setIndex(index)}
              spacing={8}
              targetRowHeight={200}
            />
          </div>
        </div>
        
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ApartmentGallery;