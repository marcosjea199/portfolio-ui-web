import SEO from '../components/SEO'

function Servicios() {
  return (
    <>
      <SEO
        title="Servicios de Diseño UI Web y Frontend | Marcos Espinoza"
        description="Servicios profesionales de diseño UI Web, desarrollo frontend y asesoría digital enfocados en usabilidad, rendimiento y conversión."
        url="/servicios"
        image="https://www.mespdesignweb.com/assets/images/og-servicios.jpg"
      />

      <main className="section-padding">
        <div className="container">

          {/* Hero */}
          <header className="mb-5">
            <h1>Servicios de diseño y desarrollo web</h1>
            <p className="lead">
              Soluciones digitales pensadas para crecer, escalar y convertir.
            </p>
          </header>

          {/* Servicio 1 */}
          <section className="mb-5">
            <h2>Diseño UI Web</h2>
            <p>
              Diseño interfaces claras, coherentes y centradas en el usuario,
              alineadas con los objetivos de tu negocio.
            </p>

            <ul>
              <li>Diseño de interfaces web</li>
              <li>Design systems</li>
              <li>Prototipos navegables</li>
              <li>Optimización UX</li>
            </ul>
          </section>

          {/* Servicio 2 */}
          <section className="mb-5">
            <h2>Desarrollo Frontend</h2>
            <p>
              Implementación frontend limpia, rápida y mantenible,
              respetando buenas prácticas y rendimiento.
            </p>

            <ul>
              <li>HTML semántico</li>
              <li>CSS moderno y escalable</li>
              <li>JavaScript y React</li>
              <li>Optimización de performance</li>
            </ul>
          </section>

          {/* Servicio 3 */}
          <section className="mb-5">
            <h2>Asesoría Web</h2>
            <p>
              Acompañamiento estratégico para mejorar productos digitales
              existentes o validar nuevas ideas.
            </p>

            <ul>
              <li>Auditorías UX/UI</li>
              <li>Revisión técnica</li>
              <li>Estrategia digital</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center mt-5">
            <h2>¿Hablamos de tu proyecto?</h2>
            <p className="lead">
              Cuéntame qué necesitas y veamos cómo puedo ayudarte.
            </p>

            <a href="/contacto" className="btn btn-primary btn-lg mt-3">
              Contactar
            </a>
          </section>

        </div>
      </main>
    </>
  )
}

export default Servicios
