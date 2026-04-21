function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className="btn-volver-arriba" 
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}

export default BackToTop;
