function Services() {
  const services = [
    {
      icon: "fa-door-closed",
      title: "Portones y Puertas",
      description: "Fabricación e instalación de portones automáticos, corredizos y puertas principales con diseños modernos y alta seguridad."
    },
    {
      icon: "fa-industry",
      title: "Estructuras y Techos",
      description: "Diseño y montaje de naves industriales, galpones, techos de chapa y estructuras metálicas de gran envergadura."
    },
    {
      icon: "fa-shield-alt",
      title: "Rejas de Seguridad",
      description: "Protecciones perimetrales, rejas para ventanas y balcones. Combinamos la máxima seguridad con la estética de tu fachada."
    },
    {
      icon: "fa-fire",
      title: "Soldadura Especializada",
      description: "Servicios de soldadura MIG, TIG y electrodo. Reparación de maquinaria, refuerzos estructurales y mantenimiento a empresas."
    }
  ];

  return (
    <section id="servicios" className="servicios" data-aos="fade-up">
      <div className="contenedor">
        <h2 className="titulo-seccion">Nuestros <span className="resaltado">Servicios</span></h2>
        <p className="subtitulo-seccion">Ofrecemos un catálogo completo de soluciones en metalurgia. Utilizamos materiales de primera calidad para asegurar durabilidad y un acabado estético perfecto.</p>
        
        <div className="grid-servicios">
          {services.map((service, index) => (
            <div className="card-servicio" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="icono-caja"><i className={`fas ${service.icon}`}></i></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
