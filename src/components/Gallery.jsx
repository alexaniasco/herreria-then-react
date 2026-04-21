import { useState } from 'react';
import Lightbox from './Lightbox';

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filter, setFilter] = useState('todos');

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1621905252501-672a01026d25?q=80&w=1200&auto=format&fit=crop",
      alt: "Soldador trabajando con chispas",
      title: "Soldadura MIG de Precisión",
      category: "soldadura"
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      alt: "Construcción con estructura metálica",
      title: "Estructura Metálica Industrial",
      category: "estructuras"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
      alt: "Portón de hierro forjado ornamental",
      title: "Portón Ornamental de Hierro Forjado",
      category: "portones"
    },
    {
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      alt: "Escalera metálica moderna",
      title: "Escalera Metálica de Diseño",
      category: "estructuras"
    },
    {
      image: "https://images.unsplash.com/photo-1558905540-21290126291c?q=80&w=1200&auto=format&fit=crop",
      alt: "Rejas de seguridad negras",
      title: "Rejas de Seguridad Perimetral",
      category: "seguridad"
    },
    {
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
      alt: "Trabajador con equipo de soldadura",
      title: "Soldadura TIG Especializada",
      category: "soldadura"
    }
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openLightbox = (index) => {
    const actualIndex = projects.findIndex(p => p === filteredProjects[index]);
    setSelectedIndex(actualIndex);
  };

  const closeLightbox = () => setSelectedIndex(null);

  const goToNext = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'portones', label: 'Portones' },
    { id: 'estructuras', label: 'Estructuras' },
    { id: 'seguridad', label: 'Seguridad' },
    { id: 'soldadura', label: 'Soldadura' }
  ];

  return (
    <section id="galeria" className="galeria" data-aos="fade-up">
      <div className="contenedor">
        <h2 className="titulo-seccion">Proyectos <span className="resaltado">Destacados</span></h2>
        <p className="subtitulo-seccion">Explora algunos de nuestros trabajos recientes. Cada imagen refleja nuestro compromiso con el detalle y la excelencia.</p>
        
        <div className="galeria-filtros">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filtro-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        <div className="grid-galeria">
          {filteredProjects.map((project, index) => (
            <div 
              className="item-galeria" 
              key={index}
              onClick={() => openLightbox(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={project.image} alt={project.alt} loading="lazy" />
              <div className="capa-galeria">
                <i className="fas fa-plus-circle"></i>
                <h4>{project.title}</h4>
                <span className="categoria-tag">{categories.find(c => c.id === project.category)?.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          image={projects[selectedIndex].image}
          title={projects[selectedIndex].title}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrev}
          hasNext={true}
          hasPrev={true}
        />
      )}
    </section>
  );
}

export default Gallery;
