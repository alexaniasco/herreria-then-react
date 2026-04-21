import { useState, useEffect } from 'react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Excelente trabajo. Los contraté para automatizar el portón de mi casa y poner rejas. Presupuesto claro, trabajo limpio y entregaron en la fecha exacta. 100% recomendados.",
      name: "Alejandro Ramírez",
      role: "Cliente Residencial",
      avatar: "A"
    },
    {
      quote: "Como arquitecta, siempre busco proveedores detallistas. El equipo de Herrería Then hizo la estructura metálica para un local comercial y las soldaduras fueron impecables.",
      name: "Mariana Torres",
      role: "Estudio de Arquitectura",
      avatar: "M"
    },
    {
      quote: "La calidad del trabajo superó nuestras expectativas. Instalaron un techo de chapa para nuestro galpón industrial en tiempo récord. Profesionales de verdad.",
      name: "Carlos Mendoza",
      role: "Dueño - Logística Express",
      avatar: "C"
    },
    {
      quote: "Ya van 3 proyectos que les confío. Desde rejas de seguridad hasta una escalera metálica decorativa. Siempre entregan lo prometido con excelente acabado.",
      name: "Laura Sánchez",
      role: "Diseñadora de Interiores",
      avatar: "L"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section id="testimonios" className="testimonios" data-aos="fade-up">
      <div className="contenedor">
        <h2 className="titulo-seccion">Lo que dicen <span className="resaltado">los clientes</span></h2>
        <p className="subtitulo-seccion">La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Construimos relaciones basadas en la confianza y el buen trabajo.</p>
        
        <div className="carrusel-container">
          <button className="carrusel-nav carrusel-prev" onClick={goToPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="carrusel-track">
            {testimonials.map((testimonial, index) => (
              <div 
                className={`card-testimonio ${index === currentIndex ? 'active' : ''}`} 
                key={index}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  opacity: index === currentIndex ? 1 : 0,
                  transition: 'all 0.5s ease'
                }}
              >
                <i className="fas fa-quote-right icono-quote"></i>
                <div className="estrellas">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>&quot;{testimonial.quote}&quot;</p>
                <div className="cliente-info">
                  <div className="cliente-avatar">{testimonial.avatar}</div>
                  <div className="cliente-datos">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carrusel-nav carrusel-next" onClick={goToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="carrusel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="testimonios-cta" data-aos="fade-up" data-aos-delay="200">
          <a href="#contacto" className="btn btn-primario">
            <i className="fas fa-calculator"></i> Solicitar Presupuesto Ahora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
