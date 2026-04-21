import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^\d{10,}$/.test(formData.telefono.replace(/\D/g, ''))) {
      newErrors.telefono = 'Ingresa un teléfono válido (mínimo 10 dígitos)';
    }
    if (!formData.servicio) newErrors.servicio = 'Selecciona un tipo de servicio';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'Describe tu proyecto';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ nombre: '', telefono: '', servicio: '', mensaje: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const isOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    
    if (day === 0) return false; // Domingo cerrado
    if (day === 6) return hour >= 8 && hour < 13; // Sábado
    return hour >= 8 && hour < 18; // Lunes a viernes
  };

  return (
    <section id="contacto" className="contacto" data-aos="fade-up">
      <div className="contenedor">
        <h2 className="titulo-seccion">Inicia tu <span className="resaltado">Proyecto</span></h2>
        <p className="subtitulo-seccion">Cotizamos a medida. Déjanos tus datos o contáctanos por nuestros canales directos. Un experto se comunicará contigo a la brevedad.</p>
        
        <div className="grid-contacto">
          {/* Info */}
          <div className="contacto-info">
            <h3>Información de Contacto</h3>
            
            <div className="item-info">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Ubicación del Taller</h4>
                <p>Av. Parque Industrial 450, Nave 3<br />Ciudad, Código Postal</p>
              </div>
            </div>
            
            <div className="item-info">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Teléfono / WhatsApp</h4>
                <p><a href="tel:+1234567890">+52 (123) 456-7890</a></p>
              </div>
            </div>
            
            <div className="item-info">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Correo Electrónico</h4>
                <p><a href="mailto:ventas@herreriathen.com">ventas@herreriathen.com</a></p>
              </div>
            </div>

            <div className="item-info">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Horario Operativo</h4>
                <p>Lunes a Viernes: 08:00 hrs - 18:00 hrs<br />Sábados: 08:00 hrs - 13:00 hrs</p>
                <span className={`estado-horario ${isOpen() ? 'abierto' : 'cerrado'}`}>
                  <i className={`fas fa-${isOpen() ? 'check-circle' : 'times-circle'}`}></i>
                  {isOpen() ? ' Abierto ahora' : ' Cerrado'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Formulario */}
          <div className="formulario">
            {isSuccess ? (
              <div className="form-success">
                <i className="fas fa-check-circle"></i>
                <h3>¡Mensaje Enviado!</h3>
                <p>Gracias por contactarnos. Un experto se comunicará contigo en las próximas 24 horas.</p>
                <button 
                  className="btn btn-primario" 
                  onClick={() => setIsSuccess(false)}
                  style={{ marginTop: '20px' }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={`form-group ${errors.nombre ? 'error' : ''}`}>
                  <input 
                    type="text" 
                    name="nombre"
                    placeholder="Nombre completo o Empresa *" 
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                </div>
                <div className={`form-group ${errors.telefono ? 'error' : ''}`}>
                  <input 
                    type="tel" 
                    name="telefono"
                    placeholder="Teléfono de contacto *" 
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                  {errors.telefono && <span className="error-message">{errors.telefono}</span>}
                </div>
                <div className={`form-group ${errors.servicio ? 'error' : ''}`}>
                  <select 
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Tipo de Servicio Requerido *</option>
                    <option value="portones">Portones y Puertas</option>
                    <option value="estructuras">Estructuras Metálicas</option>
                    <option value="seguridad">Rejas de Seguridad</option>
                    <option value="mantenimiento">Reparación / Mantenimiento</option>
                  </select>
                  {errors.servicio && <span className="error-message">{errors.servicio}</span>}
                </div>
                <div className={`form-group ${errors.mensaje ? 'error' : ''}`}>
                  <textarea 
                    name="mensaje"
                    placeholder="Describe brevemente tu proyecto (medidas aproximadas, urgencia, etc.) *" 
                    value={formData.mensaje}
                    onChange={handleChange}
                  ></textarea>
                  {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primario" 
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Enviando...
                    </>
                  ) : (
                    'ENVIAR SOLICITUD'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
