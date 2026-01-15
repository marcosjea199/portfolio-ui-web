import SEO from '../components/SEO'

function Contact() {
  return (
    <>
      <SEO
        title="Contacto | Marcos Espinoza"
        description="Contacta con Marcos Espinoza para trabajar en tu próximo proyecto de diseño UI Web o desarrollo frontend."
        url="/contacto"
        image="https://www.mespdesignweb.com/assets/images/og-contact.jpg"
      />

      <main className="section-padding">
        <div className="container">
          <h1>Contacto</h1>
          <p className="lead">
            Cuéntame sobre tu proyecto y veamos cómo puedo ayudarte.
          </p>
        </div>
      </main>
    </>
  )
}

export default Contact
