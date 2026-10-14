import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { Apartment } from '../types';

interface ApartmentGalleryProps {
  images: Apartment['images'];
  title: string;
  onClose: () => void;
}

// Native <dialog> gives focus trapping, Escape-to-close and a backdrop for free.
const ApartmentGallery = ({ images, title, onClose }: ApartmentGalleryProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      aria-label={title}
      className="m-auto max-h-[90svh] w-[min(64rem,calc(100%-2rem))] overflow-y-auto rounded-lg bg-paper p-0 text-ink backdrop:bg-scrim/85"
    >
      <div className="sticky top-0 flex items-center justify-between border-b border-rule bg-paper px-5 py-4">
        <h3 className="text-xl">{title}</h3>
        <button type="button" onClick={() => ref.current?.close()} aria-label="Close" className="rounded-md p-1 text-ink-2 hover:text-ink">
          <X size={24} aria-hidden="true" />
        </button>
      </div>
      <div className="columns-1 gap-3 p-5 sm:columns-2 lg:columns-3">
        {images.map((img) => (
          <a key={img.src} href={img.src} target="_blank" rel="noopener" className="mb-3 block break-inside-avoid">
            <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" className="w-full rounded-md" />
          </a>
        ))}
      </div>
    </dialog>
  );
};

export default ApartmentGallery;
