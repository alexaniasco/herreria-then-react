import { useEffect, useCallback } from 'react';

function Lightbox({ image, title, onClose, onNext, onPrev, hasNext, hasPrev }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight' && hasNext) onNext();
    if (e.key === 'ArrowLeft' && hasPrev) onPrev();
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        {hasPrev && (
          <button className="lightbox-nav lightbox-prev" onClick={onPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
        )}
        
        {hasNext && (
          <button className="lightbox-nav lightbox-next" onClick={onNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        )}
        
        <img src={image} alt={title} className="lightbox-image" />
        <h4 className="lightbox-title">{title}</h4>
      </div>
    </div>
  );
}

export default Lightbox;
