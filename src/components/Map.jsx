function Map() {
  return (
    <div className="mapa-contenedor">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.64621396556!2d-103.43575306692881!3d20.67377770119332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b18cb52fd39d%3A0xd63d9302bf8657d5!2sGuadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1698771234567!5m2!1ses-419!2smx" 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del Taller"
      ></iframe>
    </div>
  );
}

export default Map;
