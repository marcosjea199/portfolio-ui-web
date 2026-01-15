function Footer() {
  return (
    <footer className="bg-section border-top">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Marcos Espinoza</h5>
            <p className="text-muted">
              Diseño UI Web y desarrollo frontend enfocado en rendimiento,
              accesibilidad y SEO.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Secciones</h6>
            <ul className="list-unstyled">
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Sobre mí</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Contacto</h6>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:hola@marcospinoza.com">
                  hola@marcospinoza.com
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="text-center text-muted small">
          © {new Date().getFullYear()} Marcos Espinoza. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
