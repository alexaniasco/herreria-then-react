function Header() {
  return (
    <header>
      <div className="contenedor header-nav">
        <a href="#inicio" className="logo">HERRERÍA <span>THEN</span></a>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Proyectos</a>
          <a href="#testimonios">Reseñas</a>
          <a href="#contacto" className="nav-contacto">Pedir Cotización</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
