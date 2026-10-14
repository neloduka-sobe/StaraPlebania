import { useEffect, useRef, useState } from 'react';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.159850331732!2d16.028015341338893!3d50.88375175618831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470efd31df31ade3%3A0x57e744218361ba0d!2sStara%20Plebania!5e0!3m2!1spl!2spl!4v1740909926106!5m2!1spl!2spl';

// The embed pulls in ~500 KB of Google scripts, and the browser's own
// loading="lazy" starts it far too early. Mount it only when it's about to be seen.
const LazyMap = ({ title }: { title: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-6 h-80 overflow-hidden rounded-lg bg-rule">
      {visible && <iframe src={MAP_SRC} title={title} referrerPolicy="no-referrer-when-downgrade" className="size-full border-0" />}
    </div>
  );
};

export default LazyMap;
