import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-header py-3">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Marcos Espinoza
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>

          <div className="ms-lg-3 mt-3 mt-lg-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
