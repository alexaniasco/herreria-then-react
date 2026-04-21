function Footer() {
  return (
    <footer>
      <div className="contenedor">
        <div className="footer-grid">
          <div>
            <a href="#inicio" className="footer-logo">HERRERÍA <span>THEN</span></a>
            <p style={{ marginTop: '15px', fontSize: '0.9rem', lineHeight: '1.6' }}>Somos tu socio confiable para proyectos en acero y metal. Combinamos técnicas tradicionales con tecnología moderna para entregar resultados excepcionales.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          
          <div>
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios y Soluciones</a></li>
              <li><a href="#galeria">Proyectos Realizados</a></li>
              <li><a href="#contacto">Solicitar Cotización</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Servicios Principales</h4>
            <ul>
              <li><a href="#servicios">Portones Automatizados</a></li>
              <li><a href="#servicios">Techos y Galpones</a></li>
              <li><a href="#servicios">Seguridad Perimetral</a></li>
              <li><a href="#servicios">Soldadura Industrial</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 Herrería Then. Todos los derechos reservados. | Diseñado para profesionales.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
