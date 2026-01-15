function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding">
        <div className="container">
          <p className="eyebrow">Diseño UI Web & Frontend</p>

          <h1>
            Diseño interfaces web claras, escalables y orientadas a resultados
          </h1>

          <p className="lead">
            Ayudo a marcas y profesionales a transformar ideas en experiencias
            digitales funcionales, rápidas y bien estructuradas.
          </p>

          <div className="d-flex gap-3 mt-4">
            <a href="#" className="btn btn-primary">
              Ver servicios
            </a>
            <a href="#" className="btn btn-outline-primary">
              Ver portfolio
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-padding bg-section">
        <div className="container">
          <h2>Servicios</h2>

          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <div className="card p-4 h-100">
                <h3>Diseño UI Web</h3>
                <p>
                  Diseño de interfaces centradas en usabilidad, coherencia visual
                  y objetivos de negocio.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card p-4 h-100">
                <h3>Desarrollo Frontend</h3>
                <p>
                  Implementación frontend limpia y mantenible con enfoque en
                  rendimiento y accesibilidad.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card p-4 h-100">
                <h3>Asesoría Web</h3>
                <p>
                  Análisis y acompañamiento estratégico para mejorar productos
                  digitales existentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section-padding">
        <div className="container">
          <h2>Proyectos destacados</h2>

          <p className="lead">
            Algunos trabajos recientes en diseño y desarrollo web.
          </p>

          <div className="row mt-4">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card p-4 h-100">
                <h3>Proyecto 1</h3>
                <p>Descripción breve del proyecto.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card p-4 h-100">
                <h3>Proyecto 2</h3>
                <p>Descripción breve del proyecto.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card p-4 h-100">
                <h3>Proyecto 3</h3>
                <p>Descripción breve del proyecto.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card p-4 h-100">
                <h3>Proyecto 4</h3>
                <p>Descripción breve del proyecto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
