import SEO from '../components/SEO'

function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio de Diseño UI Web | Marcos Espinoza"
        description="Proyectos de diseño UI Web y desarrollo frontend enfocados en usabilidad, rendimiento y buenas prácticas SEO."
        url="/portfolio"
        image="https://www.mespdesignweb.com/assets/images/og-portfolio.jpg"
      />

      <main className="section-padding">
        <div className="container">
          <h1>Portfolio</h1>
          <p className="lead">
            Selección de proyectos de diseño y desarrollo web.
          </p>
        </div>
      </main>
    </>
  )
}

export default Portfolio
