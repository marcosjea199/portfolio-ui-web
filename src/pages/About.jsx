import SEO from '../components/SEO'

function About() {
  return (
    <>
      <SEO
        title="Sobre mí | Marcos Espinoza"
        description="Conoce a Marcos Espinoza, diseñador UI Web y desarrollador frontend especializado en crear experiencias digitales claras, funcionales y orientadas a resultados."
        url="/sobre-mi"
        image="https://www.mespdesignweb.com/assets/images/og-about.jpg"
      />

      <main className="section-padding">
        <div className="container">
          <h1>Sobre mí</h1>
          <p className="lead">
            Diseñador UI Web y desarrollador frontend con enfoque en producto.
          </p>
        </div>
      </main>
    </>
  )
}

export default About
